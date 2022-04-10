import { getCoinViewApi, getCoinMarketsApi, getCoinExchangesApi } from 'api/url';
import { CoinViewData, CoinMarketsList, CoinExchanges } from 'interface/coins';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CoinView() {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CoinViewData>();
  const [tabState, setTabstate] = useState('');
  const [marketsdata, setMarketsData] = useState<CoinMarketsList[]>();
  const [marketsLoading, setMarketsLoading] = useState(true);
  const [exchangesdata, setExchangesData] = useState<CoinExchanges[]>();
  const [exchangesLoading, setExchangesLoading] = useState(true);

  const getCoinView = async () => {
    try {
      setData(await getCoinViewApi(coinId));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoinView();
  }, []);

  const handleGetMarkets = async () => {
    setTabstate('markets');
    try {
      setMarketsData(await getCoinMarketsApi(coinId));
    } catch (e) {
      console.log(e);
    } finally {
      setMarketsLoading(false);
    }
  };
  const handleGetExchanges = async () => {
    setTabstate('exchanges');
    try {
      setExchangesData(await getCoinExchangesApi(coinId));
    } catch (e) {
      console.log(e);
    } finally {
      setExchangesLoading(false);
    }
  };

  const { name, symbol, description } = data || {};
  console.log(tabState);
  return (
    <div className='page-coins'>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <h1>
            {name}, {symbol}
          </h1>
          <p>{description}</p>
          <div className='coins-btnset'>
            <button type='button' onClick={handleGetMarkets}>
              markets
            </button>
            <button type='button' onClick={handleGetExchanges}>
              exchanges
            </button>
          </div>
          {tabState === 'markets' &&
            (marketsLoading ? (
              <div>Loading</div>
            ) : (
              <ul>
                {marketsdata
                  ?.filter((item, index) => index <= 30)
                  .map(({ pair }) => {
                    return <li>{pair}</li>;
                  })}
              </ul>
            ))}
          {tabState === 'exchanges' &&
            (exchangesLoading ? (
              <div>Loading</div>
            ) : (
              <ul>
                {exchangesdata
                  ?.filter((item, index) => index <= 30)
                  .map(({ id, name: exName }) => {
                    return <li>{`${id} ${exName}`}</li>;
                  })}
              </ul>
            ))}
        </>
      )}
    </div>
  );
}

export default CoinView;
