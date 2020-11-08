import axios from 'axios';
const KEY = 'AIzaSyCRqJiKlIfulwUW_yhPS6x4_d1H11gMcYs';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
