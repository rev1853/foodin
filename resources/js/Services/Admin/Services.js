import axios from "axios";

const service = axios.create({
   baseURL: 'http://localhost:8000/admin',
});

export default service;