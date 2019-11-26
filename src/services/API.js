import axios from 'axios';

const api = axios({
  type: 'get', 
  url:"https://1d220925.ngrok.io/teste"
});

export default api