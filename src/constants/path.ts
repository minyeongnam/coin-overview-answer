// eslint-disable-next-line import/prefer-default-export
export const ROOT = {
  ROOT: '/',
  PRICES: 'prices',
  EXCHANGES: 'exchanges',
  COINS: 'coins',
  NOTFOUND: '/*',
};

export const COINS = {
  ROOT: `${ROOT.COINS}`,
  VIEW: `${ROOT.COINS}/:coinId`,
};
