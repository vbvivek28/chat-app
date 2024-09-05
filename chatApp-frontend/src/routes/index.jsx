import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmail from "../pages/CheckEmail";
import CheckPassword from "../pages/CheckPassword";
import HomePage from "../pages/HomePage";
import MessagePage from "../components/MessagePage";
import AuthLayouts from "../layout";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/register",
                element:
                <AuthLayouts><RegisterPage/></AuthLayouts>
            },
            {
                path:"/email",
                element:<AuthLayouts><CheckEmail/></AuthLayouts>
            },
            {
                path:"/password",
                element:<AuthLayouts><CheckPassword/></AuthLayouts>
            },{
                path:"", 
                element:<HomePage/>,
                children:[
                    {
                        path:':userId',
                        element:<MessagePage/>
                    }
                ]
            }
        ]
    }
])

export default router;