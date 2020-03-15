import axios from 'axios';

const KEY = 'AIzaSyDt33a7kMzjrM3g4zkAgMlxRWO5U0w6WeY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    q: 'surfboards'
  }
});






