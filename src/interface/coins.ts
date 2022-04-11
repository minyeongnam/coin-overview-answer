export interface CoinsList {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  isNew: boolean;
  isActive: boolean;
  type: string;
}

export interface CoinViewTags {
  id: string;
  name: string;
  coinCounter: number;
  icoCounter: number;
}

export interface CoinviewTeam {
  id: string;
  name: string;
  position: string;
}

export interface CoinviewContracts {
  contract: string;
  platform: string;
  type: string;
}

export interface CoinviewLinks {
  explorer: string[] | null;
  facebook: string[] | null;
  reddit: string[] | null;
  sourceCode: string[] | null;
  website: string[] | null;
  youtube: string[] | null;
  medium: string[] | null;
}
export interface LinksExtended {
  url: string;
  type: string;
  stats: {
    [property: string]: number;
  };
}

export interface Whitepaper {
  link: string;
  thumbnail: string;
}
export interface CoinViewData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  isNew: boolean;
  isActive: boolean;
  type: string;
  tags: CoinViewTags[];
  team: CoinviewTeam[];
  description: string | null;
  message: string;
  openSource: boolean;
  hardwareWallet: boolean;
  startedAt: string | null;
  developmentStatus: string | null;
  proofType: string | null;
  orgStructure: string | null;
  hashAlgorithm: string | null;
  contracts: CoinviewContracts;
  links: CoinviewLinks;
  linksExtended: LinksExtended;
  whitepaper: Whitepaper;
  firstDataAt: string;
  lastDataAt: string;
}

export interface CoinMarketQuote {
  price: number;
  volume24h: number;
}
export interface CoinMarketQuotes {
  usd: CoinMarketQuote;
}
export interface CoinMarketsList {
  exchangeId: string;
  exchangeName: string;
  pair: string;
  baseCurrencyId: string;
  baseCurrencyName: string;
  quoteCurrencAid: string;
  quoteCurrencyName: string;
  marketUrl: string;
  category: string;
  feeType: string;
  outlier: boolean;
  adjustedVolume24HShare: number;
  quotes: CoinMarketQuotes;
  lastUpdated: string;
}

export interface CoinExchangesFiat {
  name: string;
  symbol: string;
}
export interface CoinExchanges {
  id: string;
  name: string;
  fiats: CoinExchangesFiat[];
  adjustedVolume24HShare: number;
}
