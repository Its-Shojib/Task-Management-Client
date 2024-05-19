import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: TaskCollection = [], refetch } = useQuery({
        queryKey: ['taskCollection'],
        queryFn: async () => {
            if (!user) {
                return [];
            }

            const res = await axiosPublic.get(`/load-task/${user.email}`);
            return res.data;
        },
        enabled: Boolean(user),
    });

    return [TaskCollection, refetch];
};

export default useLoadData;
