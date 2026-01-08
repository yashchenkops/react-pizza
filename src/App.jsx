import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound404 from './pages/NotFound404';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
