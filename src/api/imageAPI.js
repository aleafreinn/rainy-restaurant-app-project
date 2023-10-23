import axios from "axios";

const IMGBB_KEY = "032edaf1c0b79204f22d3a982a35103a";

export default axios.create({
  baseURL: `https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`,
});
