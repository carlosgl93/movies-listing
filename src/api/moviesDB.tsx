import axios from 'axios';

const moviesDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '44eaf810e92e6c8240e9912dfac82de5',
    language: 'en-US',
  },
});

export default moviesDB;
