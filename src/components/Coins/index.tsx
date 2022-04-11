import { getCoinsApi } from 'api/url';
import Loading from 'components/Loading';
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
      <ol className='list-coin'>
        {loading ? (
          <Loading />
        ) : (
          data
            .filter(({ rank }) => rank && rank <= 10)
            .map(({ id, rank, name, symbol }) => {
              return (
                <li className='list-item' key={id}>
                  <span className='list-item-title'>
                    {rank}. {name} {symbol}
                  </span>
                  <Link to={`/coins/${id}`} className='list-item-link'>
                    view ▶
                  </Link>
                </li>
              );
            })
        )}
      </ol>
    </div>
  );
}

export default Coins;
