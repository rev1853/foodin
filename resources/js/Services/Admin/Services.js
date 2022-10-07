import axios from "axios";

const adminService = axios.create({
   baseURL: 'http://localhost:8000/admin',
});

const service = axios.create({
   baseURL: 'http://localhost:8000/api',
});

export { adminService, service };