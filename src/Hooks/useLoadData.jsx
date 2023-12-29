import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = () => {
    // let axiosSecure = useAxiosSecure();
    let axiosPublic = useAxiosPublic();

    
    let { user } = useAuth();
    // console.log(user);
    const { data: TaskCollection = [], refetch } = useQuery({
        queryKey: ['task Collection'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/load-task/${user.email}`);
            return res.data;
        }
    })
    return [TaskCollection, refetch];
}
export default useLoadData;