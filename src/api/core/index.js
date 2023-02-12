import axios from "axios";

const API = axios.create({
  baseURL: "https://aws.random.cat/meow?ref=apilist.fun",
  timeout: 2400,
});

export default API;
