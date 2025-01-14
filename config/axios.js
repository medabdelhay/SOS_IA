import axios from "axios";
export const  BASE_URL="http://192.168.100.239:1210/"
export default axios.create({
    baseURL: BASE_URL+"scolarites/mobile/",
});
