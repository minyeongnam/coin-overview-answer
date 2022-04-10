import { ExchangesData } from 'api/interface/exchanges';
import { PricesData } from 'api/interface/prices';
import axios, { AxiosResponse } from 'axios';
import camelCaseKeys from 'camelcase-keys';

export const api = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1',
});

api.interceptors.response.use(
  (response) => {
    return {
      ...response,
      data: camelCaseKeys(response.data, { deep: true }),
    };
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const getPricesApi = async () => {
  const { data }: AxiosResponse<PricesData[]> = await api.get('tickers');
  return data;
};

export const getExchangesApi = async () => {
  const { data }: AxiosResponse<ExchangesData[]> = await api.get('exchanges');
  return data;
};
