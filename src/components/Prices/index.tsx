import { PricesData } from 'api/interface/prices';
import { useApi } from 'api/url/prices';

function Prices() {
  const { data, isLoading } = useApi();

  return (
    <div className='page-Prices'>
      {isLoading ? (
        'loading'
      ) : (
        <ul>
          {data
            ?.filter((priceData: PricesData) => priceData.rank < 30)
            .map((priceData: PricesData) => {
              const { id, name, symbol } = priceData;
              return <li key={id}>{`${name} / ${symbol}: ${'가격'}`}</li>;
            })}
        </ul>
      )}
    </div>
  );
}

export default Prices;
