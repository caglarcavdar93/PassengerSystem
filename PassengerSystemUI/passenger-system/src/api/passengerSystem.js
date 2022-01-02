import axios from "axios";
import Cookies from "universal-cookie/es6";
const instance = axios.create({
  baseURL: "https://localhost:7008",
  headers: {
    "content-type": "application/json",
    accepts: "text/plain",
  },
});
let cookies = new Cookies();
instance.interceptors.request.use(
  async (conf) => {
    const token = cookies.get("token");
    if (token) {
      conf.headers.Authorization = `Bearer ${token}`;
    }
    return conf;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
