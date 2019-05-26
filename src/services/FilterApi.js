import axios from 'axios';

const BASE_URL = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

const FilterApi = axios.create({
  baseURL: BASE_URL,
});

export const getFilters = () => FilterApi.get('/');

export default FilterApi;
