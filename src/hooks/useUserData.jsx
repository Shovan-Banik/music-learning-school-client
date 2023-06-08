import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useUserData = () => {
    const{user,loading}=useAuth();

   const {data:userFromDB}=useQuery({
    queryKey:['user', user?.email],
    enabled: !loading,
    queryFn: async()=>{
        const res= await axios.get(`http://localhost:5000/users/${user?.email}`);
        return res.data;
    }
   })
   console.log(userFromDB);
   return[userFromDB];
};

export default useUserData;