
import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//import components
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExit } from '../helper/helper';

//react routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <CheckUserExit><Quiz></Quiz></CheckUserExit>
  },
  {
    path: '/result',
    element: <CheckUserExit><Result></Result></CheckUserExit>
  }
])
function App() {
  return (
   <>
   <RouterProvider router={router}></RouterProvider> 
   
   </>
  );
}

export default App;
