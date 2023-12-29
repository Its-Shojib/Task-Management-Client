import axios from "axios";

let axiosPublic = axios.create({
    baseURL: 'https://task-management-server-pearl-three.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;