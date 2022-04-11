import { getCoinViewApi, getCoinMarketsApi, getCoinExchangesApi } from 'api/url';
import Loading from 'components/Loading';
import { CoinViewData, CoinMarketsList, CoinExchanges } from 'interface/coins';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';

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

  return (
    <div className='page-coinview'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className='view-title'>
            {name}, {symbol}
          </h1>
          <p className='view-description'>{description}</p>
          <div className='view-tab'>
            <button type='button' className='btn-tab' onClick={handleGetMarkets}>
              markets
            </button>
            <button type='button' className='btn-tab' onClick={handleGetExchanges}>
              exchanges
            </button>
          </div>
          {tabState === 'markets' &&
            (marketsLoading ? (
              <Loading />
            ) : (
              <ul className='list-market'>
                {marketsdata
                  ?.filter(({ marketUrl }) => !!marketUrl)
                  .filter((item, index) => index <= 10)
                  .map(({ exchangeName, marketUrl }) => {
                    return (
                      <li className='list-item' key={v4()}>
                        {exchangeName}
                        {marketUrl && (
                          <>
                            {` : `}
                            <a
                              href={marketUrl}
                              className='list-item-link'
                              target='_blank'
                              rel='noreferrer'
                            >
                              {marketUrl}
                            </a>
                          </>
                        )}
                      </li>
                    );
                  })}
              </ul>
            ))}
          {tabState === 'exchanges' &&
            (exchangesLoading ? (
              <Loading />
            ) : (
              <ul className='list-exchange'>
                {exchangesdata
                  ?.filter(({ fiats }) => fiats.length > 0)
                  .filter((item, index) => index <= 10)
                  .map(({ id, name: exName, fiats }) => {
                    return (
                      <li className='list-item' key={id}>
                        <strong className='list-item-title'>{exName}: </strong>
                        <span className='list-item-fiats'>
                          {fiats.map(({ symbol: exchangesSymbol }, index) => {
                            if (index === fiats.length) {
                              return `${exchangesSymbol}`;
                            }
                            return `${exchangesSymbol}, `;
                          })}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            ))}
        </>
      )}
    </div>
  );
}

export default CoinView;
