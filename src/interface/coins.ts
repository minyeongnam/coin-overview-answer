export interface CoinsList {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface CoinViewData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  tags: [
    {
      id: string;
      name: string;
      coin_counter: number;
      ico_counter: number;
    },
  ];
  team: [{ id: string; name: string; position: string }];
  description: string | null;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at: string | null;
  development_status: string | null;
  proof_type: string | null;
  org_structure: string | null;
  hash_algorithm: string | null;
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
    source_code: string[] | null;
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
  first_data_at: string;
  last_data_at: string;
}

export interface CoinMarketsList {
  exchange_id: string;
  exchange_name: string;
  pair: string;
  base_currency_id: string;
  base_currency_name: string;
  quote_currency_id: string;
  quote_currency_name: string;
  market_url: string;
  category: string;
  fee_type: string;
  outlier: boolean;
  adjusted_volume_24h_share: number;
  quotes: {
    usd: {
      price: number;
      volume_24h: number;
    };
  };
  last_updated: string;
}

export interface CoinExchanges {
  id: string;
  name: string;
  fiats: any[];
  adjusted_volume_24h_share: number;
}
