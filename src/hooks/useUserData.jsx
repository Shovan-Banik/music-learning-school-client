import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = () => {
    const{user,loading}=useAuth();
    const [axiosSecure]=useAxiosSecure();

   const {data:userFromDB=[], isLoading: isUserDBLoading}=useQuery({
    queryKey:['user', user?.email],
    enabled: !loading,
    queryFn: async()=>{
        const res= await axiosSecure.get(`/users/${user?.email}`);
        return res.data;
    }
   })
   return[userFromDB,isUserDBLoading];
};

export default useUserData;