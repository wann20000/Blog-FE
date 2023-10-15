import axios from "axios";

// Axios Function //
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
export default axiosInstance;