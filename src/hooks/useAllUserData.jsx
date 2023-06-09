import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllUserData = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading } = useAuth();
    const { data: allUserFromDB=[], refetch, isLoading: isAllUserDBLoading } = useQuery({
        queryKey: ['allUsers'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers');
            return res.data;
        }
    })
    return [allUserFromDB, refetch, isAllUserDBLoading];
};

export default useAllUserData;