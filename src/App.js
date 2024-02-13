import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import Login from "./components/Login"
import VideoContainer from "./components/VideoContainer"
import MainContainer from "./components/MainContainer"

const App = () => {

  const appRouter= createBrowserRouter([
   { path:'/',
    element : <Body/>,
    children:[
       {
        path:'/',
       element:<MainContainer/>,
       },
       { path:'/watch',
       element : <VideoContainer/>
     },
    ]
  },
   { path:'/login',
    element : <Login/>
  },
 
  ])

  return (
    <div>
     {/* <Header/>
     <Body/> */}
     <RouterProvider router={appRouter}/>


       
    </div>
  )
}

export default App
