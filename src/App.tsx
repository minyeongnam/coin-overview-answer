import Coins from 'components/Coins';
import CoinView from 'components/Coins/CoinView';
import Exchanges from 'components/Exchanges';
import NotFound from 'components/NotFound';
import Prices from 'components/Prices';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { COINS, ROOT } from './constants/path';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path={ROOT.PRICES} element={<Prices />} />
          <Route path={ROOT.EXCHANGES} element={<Exchanges />} />
          <Route path={ROOT.COINS} element={<Coins />} />
          <Route path={`${COINS.VIEW}`} element={<CoinView />} />
          <Route path={ROOT.NOTFOUND} element={<NotFound />} />
          <Route path={ROOT.ROOT} element={<Prices />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
