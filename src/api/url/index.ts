import { ExchangesList } from 'interface/exchanges';
import { PricesList } from 'interface/prices';
import axios, { AxiosResponse } from 'axios';
import camelCaseKeys from 'camelcase-keys';
import { CoinsList, CoinViewData, CoinMarketsList, CoinExchanges } from 'interface/coins';

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
  const { data }: AxiosResponse<PricesList[]> = await api.get('tickers');
  return data;
};

export const getExchangesApi = async () => {
  const { data }: AxiosResponse<ExchangesList[]> = await api.get('exchanges');
  return data;
};

export const getCoinsApi = async () => {
  const { data }: AxiosResponse<CoinsList[]> = await api.get('coins');
  return data;
};

export const getCoinViewApi = async (coinId: string = '') => {
  const { data }: AxiosResponse<CoinViewData> = await api.get(`coins/${coinId}`);
  return data;
};

export const getCoinMarketsApi = async (coinId: string = '') => {
  const { data }: AxiosResponse<CoinMarketsList[]> = await api.get(`coins/${coinId}/markets`);
  return data;
};

export const getCoinExchangesApi = async (coinId: string = '') => {
  const { data }: AxiosResponse<CoinExchanges[]> = await api.get(`coins/${coinId}/exchanges`);
  return data;
};
