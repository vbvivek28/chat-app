import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmail from "../pages/CheckEmail";
import CheckPassword from "../pages/CheckPassword";
import HomePage from "../pages/HomePage";
import MessagePage from "../components/MessagePage";
import AutoLayouts from "../layout";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/register",
                element:<AutoLayouts><RegisterPage/></AutoLayouts>
            },
            {
                path:"/email",
                element:<AutoLayouts><CheckEmail/></AutoLayouts>
            },
            {
                path:"/password",
                element:<AutoLayouts><CheckPassword/></AutoLayouts>
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