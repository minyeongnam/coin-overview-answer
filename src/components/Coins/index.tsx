import { getCoinsApi } from 'api/url';
import { CoinsList } from 'interface/coins';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Coins() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CoinsList[]>([]);

  const getCoins = async () => {
    setData(await getCoinsApi());
    setLoading(false);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div className='page-coins'>
      <ul>
        {loading
          ? 'Loading'
          : data
              .filter(({ rank }) => rank && rank <= 10)
              .map(({ id, rank, name, symbol }) => {
                return (
                  <li key={id}>
                    <Link to={`/coins/${id}`}>{`${rank}. ${name} ${symbol}`}</Link>
                  </li>
                );
              })}
      </ul>
    </div>
  );
}

export default Coins;
