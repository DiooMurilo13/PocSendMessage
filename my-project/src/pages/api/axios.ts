import axios from "axios";

export const api = axios.create({
  baseURL: "URL DO BACK-END",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
