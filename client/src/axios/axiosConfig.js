import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",

  // Remote server
  baseURL: "https://evangadi-forum-l9c6.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
