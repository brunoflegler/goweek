import axios from "axios";

//10.0.2.2 emulator
//10.0.3.2 genymotion

const api = axios.create({
  baseURL: "http://10.0.3.2:3000/api"
});

export default api;
