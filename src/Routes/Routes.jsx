import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageStudent from "../pages/Dashboard/ManageStudent/ManageStudent";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'instructor',
                element: <Instructor></Instructor>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'manageStudents',
                element:<ManageStudent></ManageStudent>
            },
            {
                path:'addAClass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            }
        ]
    }
]);
export default router;