export interface ExchangesQuotes {
  usd: {
    reportedVolume24h: number;
    adjustedVolume24h: number;
    reportedVolume7d: number;
    adjustedVolume7d: number;
    reportedVolume30d: number;
    adjustedVolume30d: number;
  };
}
export interface ExchangesLinks {
  website: string[];
  twitter?: string[];
}
export interface ExchangesData {
  id: string;
  name: string;
  active: boolean;
  websiteStatus: boolean;
  apiStatus: boolean;
  description: string | null;
  message: string;
  links: ExchangesLinks;
  marketsDataFetched: boolean;
  adjustedRank: number | null;
  reportedRank: number;
  currencies: number;
  markets: number;
  fiats: any[];
  quotes: ExchangesQuotes;
  lastUpdated: string;
}
