import axios from "axios";

let axiosPublic = axios.create({
    baseURL: 'https://task-management-system-server-jade.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;