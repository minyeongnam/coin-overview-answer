import Prices from 'components/Prices';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ROOT } from './constants/path';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path={ROOT.PRICES} element={<Prices />} />
          <Route path={ROOT.EXCHANGES} />
          <Route path={ROOT.COINS} />
          <Route path={ROOT.NOTFOUND} />
          <Route path={ROOT.ROOT} element={<Prices />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
