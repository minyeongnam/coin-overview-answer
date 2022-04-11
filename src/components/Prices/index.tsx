import { PricesList } from 'interface/prices';
import { getPricesApi } from 'api/url';
import { useEffect, useState } from 'react';
import Loading from 'components/Loading';

function Prices() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PricesList[]>([]);

  const getPrices = async () => {
    try {
      setData(await getPricesApi());
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPrices();
  }, []);

  return (
    <div className='page-prices'>
      <ol className='list-price'>
        {loading ? (
          <Loading />
        ) : (
          data
            .filter(({ rank }) => rank <= 30)
            .map(({ id, name, rank, symbol, quotes }) => {
              return (
                <li className='list-item' key={id}>
                  {rank}. {name} / {symbol}: {quotes.usd.price.toFixed(2)}
                </li>
              );
            })
        )}
      </ol>
    </div>
  );
}

export default Prices;
