import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'
/**import connection file */
import connect from './database/conn.js'

const app=express()

/**api middlewares */
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config();

/** app port */
const port=process.env.PORT||8080



/** routes */
app.use('/api',router)  /** api's */

app.get('/',(req,res)=>{
    try{
res.json("Get Request")
    }catch(error){
        res.json(error)
    }
})

/** start server only when we have a valid connection */
connect().then(() => {
try{
    app.listen(port,()=>{
        console.log(`Server connected to http://localhost:${port}`)
    })
    if (process.env.NODE_ENV === 'production') {
        //*Set static folder up in production
        app.use(express.static('client/build'));
    
        app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
      }
}catch(error){
    console.log("Cannot connect to the server");
}
}).catch(error => {
    console.log("Invalid database connection");
})
