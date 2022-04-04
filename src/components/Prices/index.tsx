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
    <div className='page-Prices'>
      <ul>
        {loading
          ? 'Loading'
          : data
              .filter((priceData) => priceData.rank < 30)
              .map((priceData) => {
                const { id, name, symbol } = priceData;
                return <li key={id}>{`${name} / ${symbol}: ${'가격'}`}</li>;
              })}
      </ul>
    </div>
  );
}

export default Prices;
