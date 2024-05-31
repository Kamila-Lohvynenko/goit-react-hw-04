import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com';
const key = 'x1UQ05IDaqq1wmH8JjF-Dx999AgTB0AAHBq00Jzmd8M';

async function fetchImages(query, page) {
  const response = await axios.get('/search/photos', {
    params: { client_id: key, query, page },
  });
  console.log(response);
  return response.data;
}

export { fetchImages };
