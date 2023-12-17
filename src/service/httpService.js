import axios from "axios";

const link = axios.create({
  baseURL: "http://localhost:5000",
});

const http = {
  get: link.get,
  delete: link.delete,
  post: link.post,
  put: link.put,
};
export default http;
