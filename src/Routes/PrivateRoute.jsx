import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import progress from '../assets/animation/95585-progress-bar-simple-loading-animation.json'

const PrivateRoute = ({children}) => {
    const{user,loading}=useAuth();
    const location=useLocation();

    if(loading){
        return <div> <Lottie animationData={progress} loop={true} /> </div>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;