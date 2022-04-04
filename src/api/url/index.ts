import { PricesData } from 'api/interface/prices';
import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1',
});

export const getPricesApi = async () => {
  const { data }: AxiosResponse<PricesData[]> = await api.get('tickers');
  return data;
};

// 나머지 API 작성해주세요.
