import axios from 'axios';

const apiRDStation = axios.create({
    baseURL: "https://fcap-theta.vercel.app/api",
});

export default apiRDStation;