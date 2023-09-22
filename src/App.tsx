import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/general/components/header/header';
import { News } from './components/ui/components/news/news';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreType } from './redux/store';
import { useEffect } from 'react';
import { fetchNews } from './redux/reducers/newsDataReducer';

function App() {

  const newsDataFromRedux = useSelector((state: StoreType) => state.newsData);
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchNews());
    }, []);

  return (
    <Router>
      <div className="App">
        < Header />
        < News />
        <Routes>
          <Route path="/first"></Route>
          <Route path="/second"></Route>
          <Route path="/third"></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;