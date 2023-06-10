import { Navigate, useLocation} from "react-router-dom";

import Lottie from "lottie-react";
import progress from '../assets/animation/95585-progress-bar-simple-loading-animation.json'
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";

const AdminRoute = ({children}) => {
    const{user,loading}=useAuth();
    const location=useLocation();
    const[userFromDB,isUserDBLoading]=useUserData();

    const role=userFromDB?.role;

    if(loading || isUserDBLoading){
        return <div className="w-2/12 flex justify-center"> <Lottie animationData={progress} loop={true} /> </div>
    }
    if(user && role ==='admin'){
        return children;
    }

    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;