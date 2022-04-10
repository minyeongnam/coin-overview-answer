import { ExchangesList } from 'interface/exchanges';
import { getExchangesApi } from 'api/url';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

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
      <ul>
        {loading
          ? 'Loading'
          : data
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
                  <li key={id}>
                    <span>{`${name}`}</span>
                    <span>{`apiStatus: ${apiStatus} websiteStatus: ${websiteStatus}`}</span>
                    {description && <p>{sliceDescription(description)}</p>}
                    {links.website && (
                      <div className='links'>
                        <span>website</span>
                        <ul>
                          {links.website.map((item) => (
                            <li key={v4()}>
                              <a href={item} target='_blank' rel='noreferrer'>
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {links.twitter && (
                      <div className='links'>
                        <span>twitter</span>
                        <ul>
                          {links.twitter?.map((item) => (
                            <a href={item} target='_blank' rel='noreferrer'>
                              {item}
                            </a>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
      </ul>
    </div>
  );
}

export default Exchanges;
