import axios from 'axios';

const creditsDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/credit',
  params: {
    api_key: '44eaf810e92e6c8240e9912dfac82de5',
    language: 'en-US',
  },
});

export default creditsDB;
