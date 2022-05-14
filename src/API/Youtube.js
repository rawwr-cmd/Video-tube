import axios from "axios";

const KEY = "AIzaSyBluYdQcm62_s-efNYj40k6j9TQC6fZmYU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
