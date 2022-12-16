import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '156a8881e4msha1a964d6d87be9dp1eb99ejsn55f0f2239669',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {
//     q: 'music',
//     part: 'snippet,id',
//     regionCode: 'US',
//     maxResults: '50',
//     order: 'date'
//   },
//   headers: {
//     'X-RapidAPI-Key': '156a8881e4msha1a964d6d87be9dp1eb99ejsn55f0f2239669',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };