import axios from "axios";

const baseurl = "http://localhost:3001/api"

// create an axios instance

const instance = axios.create({
  baseURL: baseurl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL: baseurl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

// export instances
export { instance, protectedInstance };