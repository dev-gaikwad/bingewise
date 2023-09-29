export const fetchData = async (endpoint: string, params = '') => {
  const BASE_URL = process.env.BASE_URL;
  const API_KEY = process.env.TMDB_API_KEY;
  const response = await fetch(
    `${BASE_URL}${endpoint}${params}api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
