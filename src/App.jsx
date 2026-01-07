import Header from './components/Header';
import NotFound from './pages/404';
import Home from './pages/Home';


import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <NotFound />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
