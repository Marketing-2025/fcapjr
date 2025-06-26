import axios from 'axios';

const apiRDStation = axios.create({
    baseURL: "https://fcapjr.vercel.app/api"
});

export default apiRDStation;