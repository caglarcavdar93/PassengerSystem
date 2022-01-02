import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7008",
  headers: {
    "content-type": "application/json",
    "accepts": "text/plain"
  },
});
