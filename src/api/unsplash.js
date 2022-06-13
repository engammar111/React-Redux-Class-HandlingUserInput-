import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bjD043VplI36-4J-XPVroXyK1KgQVfTNvdK0jAAM-iY",
  },
});
