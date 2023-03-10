import path from 'path'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'
import {fileURLToPath} from 'url';

/**import connection file */
import connect from './database/conn.js'

const app=express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**api middlewares */
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config();

/** app port */
const port=process.env.PORT||8080



/** routes */
app.use('/api',router)  /** api's */


        if (process.env.NODE_ENV === 'production') {
            //*Set static folder up in production
            app.use(express.static(path.join("client/build")));
        app.get('*', (req,res) => { res.sendFile(path.resolve(path.dirname(__dirname), "client", "build","index.html"))
        });
        }
   



/** start server only when we have a valid connection */
connect().then(() => {
try{

    app.listen(port,()=>{
        console.log(`Server connected to http://localhost:${port}`)
    })
  
}catch(error){
    console.log("Cannot connect to the server");
}
}).catch(error => {
    console.log("Invalid database connection");
})
