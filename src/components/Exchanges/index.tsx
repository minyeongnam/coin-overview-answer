import { ExchangesList } from 'interface/exchanges';
import { getExchangesApi } from 'api/url';
import { useEffect, useState } from 'react';
import Loading from 'components/Loading';

function Exchanges() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ExchangesList[]>([]);

  const getExchanges = async () => {
    try {
      setData(await getExchangesApi());
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExchanges();
  }, []);

  const sliceDescription = (description: string) => {
    if (description.length > 200) {
      return `${description.slice(0, 200)}...`;
    }
    return description;
  };

  return (
    <div className='page-exchanges'>
      <ul className='list-exchange'>
        {loading ? (
          <Loading />
        ) : (
          data
            .filter(({ apiStatus, websiteStatus }) => apiStatus && websiteStatus)
            .filter(({ adjustedRank }) => adjustedRank && adjustedRank <= 5)
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map(({ id, name, description, links, apiStatus, websiteStatus }) => {
              return (
                <li className='list-item' key={id}>
                  <strong className='list-item-title'>{name}</strong>
                  <span className='list-item-status'>
                    apiStatus: {`${apiStatus}`} / websiteStatus: {`${websiteStatus}`}
                  </span>
                  {description && (
                    <p className='list-item-description'>{sliceDescription(description)}</p>
                  )}
                  {links.website && (
                    <div className='list-item-links'>
                      <strong>website</strong>
                      <ul>
                        {links.website.map((item) => (
                          <li key={item}>
                            <a href={item} target='_blank' rel='noreferrer'>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {links.twitter && (
                    <div className='list-item-links'>
                      <strong>twitter</strong>
                      <ul>
                        {links.twitter?.map((item) => (
                          <li key={item}>
                            <a href={item} target='_blank' rel='noreferrer'>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })
        )}
      </ul>
    </div>
  );
}

export default Exchanges;
