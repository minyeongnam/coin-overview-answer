import { PricesData } from 'api/interface/prices';
import { getPricesApi } from 'api/url';
import { useEffect, useState } from 'react';

function Prices() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PricesData[]>([]);

  const getPrices = async () => {
    setData(await getPricesApi());
    setLoading(false);
  };

  useEffect(() => {
    getPrices();
  }, []);

  return (
    <div className='page-prices'>
      <ul>
        {loading
          ? 'Loading'
          : data
              .filter(({ rank }) => rank <= 30)
              .map(({ id, name, rank, symbol, quotes }) => {
                return (
                  <li key={id}>{`${rank}. ${name} / ${symbol}: ${quotes.usd.price.toFixed(2)}`}</li>
                );
              })}
      </ul>
    </div>
  );
}

export default Prices;
