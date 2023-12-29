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
                // Return an empty array if user is not available
                return [];
            }

            const res = await axiosPublic.get(`/load-task/${user.email}`);
            return res.data;
        },
        enabled: Boolean(user), // Only enable the query when user is truthy
    });

    return [TaskCollection, refetch];
};

export default useLoadData;
