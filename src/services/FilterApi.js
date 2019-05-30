import axios from 'axios';

import { FILTER_API_BASE_URL } from '../constants';

const FilterApi = axios.create({
  baseURL: FILTER_API_BASE_URL,
});

export const getFilters = () => FilterApi.get('/');

export default FilterApi;
