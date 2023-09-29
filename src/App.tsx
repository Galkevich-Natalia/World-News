import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/reset.css';
import { Header } from './components/general/components/header/header';
import { News } from './components/ui/components/news/news';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreType } from './redux/store';
import { useEffect } from 'react';
import { fetchNews } from './redux/reducers/newsDataReducer';
import { FilterNews } from './components/ui/components/filterNews/filterNews';

function App() {

  const newsDataFromRedux = useSelector((state: StoreType) => state.newsData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNews())
  }, []);

  return (
    <Router>

      <div className="App">
        < Header />
        <Routes>
          <Route path="/" element={ < News /> } />
          <Route path="/category/:category" element={ < FilterNews /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;