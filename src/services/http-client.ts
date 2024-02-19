import axios from "axios";

// bilal this is for api calls
console.log(process.env.REACT_APP_BASE_URL, "env dataaaaaa");

const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;
