export interface CoinsList {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  isNew: boolean;
  isActive: boolean;
  type: string;
}

export interface CoinViewData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  isNew: boolean;
  isActive: boolean;
  type: string;
  tags: [
    {
      id: string;
      name: string;
      coinCounter: number;
      icoCounter: number;
    },
  ];
  team: [{ id: string; name: string; position: string }];
  description: string | null;
  message: string;
  openSource: boolean;
  hardware_wallet: boolean;
  startedAt: string | null;
  developmentStatus: string | null;
  proofType: string | null;
  orgStructure: string | null;
  hashAlgorithm: string | null;
  contracts: [
    {
      contract: string;
      platform: string;
      type: string;
    },
  ];
  links: {
    explorer: string[] | null;
    facebook: string[] | null;
    reddit: string[] | null;
    sourceCode: string[] | null;
    website: string[] | null;
    youtube: string[] | null;
    medium: string[] | null;
  };
  links_extended: {
    url: string;
    type: string;
    stats: {
      [property: string]: number;
    };
  };
  whitepaper: {
    link: string;
    thumbnail: string;
  };
  firstDataAt: string;
  lastDataAt: string;
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
  quotes: {
    usd: {
      price: number;
      volume24h: number;
    };
  };
  lastUpdated: string;
}

export interface CoinExchanges {
  id: string;
  name: string;
  fiats: [
    {
      name: string;
      symbol: string;
    },
  ];
  adjustedVolume24HShare: number;
}
