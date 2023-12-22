import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useLoadData = () => {
    let axiosPublic = useAxiosPublic();
    let { user } = useAuth();
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