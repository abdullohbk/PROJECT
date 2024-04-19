import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Home from "./home";
import App from "../../App";


const Router = () =>{
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            </Route>
        )
    )
    return <RouterProvider router={root}/>
}

export default Router