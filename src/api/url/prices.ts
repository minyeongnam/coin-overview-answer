import { PricesData } from 'api/interface/prices';
import axios from 'axios';
import { useQuery } from 'react-query';

export const getPrices = async (): Promise<Array<PricesData>> => {
  const { data } = await axios.get('https://api.coinpaprika.com/v1/tickers');
  return data;
};

export const useApi = () => {
  return useQuery('posts', getPrices);
};

export const Exchange = '';
