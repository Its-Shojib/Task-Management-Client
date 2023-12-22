import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = () => {
    let axiosPublic = useAxiosPublic();
    const { data: TaskCollection = [], refetch } = useQuery({
        queryKey: ['task Collection'],
        queryFn: async () => {
            const res = await axiosPublic.get('/load-task');
            return res.data;
        }
    })
    return [TaskCollection, refetch];
}
export default useLoadData;