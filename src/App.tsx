import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/reset.css';
import { Header } from './components/general/components/header/header';
import { News } from './components/ui/news/news';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreType } from './redux/store';
import { useEffect } from 'react';
import { fetchNews } from './redux/reducers/newsDataReducer';
import { FilterNews } from './components/ui/filterNews/filterNews';
import { Footer } from './components/general/components/footer/footer';
import { About } from './components/ui/about/about';
import { ContactUs } from './components/ui/contactUs/contactUs';
import { Help } from './components/ui/help/help';
import { PrivacyPolicy } from './components/ui/privacyPolicy/privacyPolicy';
import { SingleNews } from './components/ui/news/singleNews/singleNews';
import { LoginForm } from './components/ui/loginForm/loginForm';
import { SignUpForm } from './components/ui/signUpForm/signUpForm';

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
          <Route path="/signup" element={ < SignUpForm /> } />
          <Route path="/login" element={ < LoginForm /> } />
          <Route path="/category/:category" element={ < FilterNews /> } />
          <Route
            path="/news/:uri/editNews"
            element={
              < SingleNews />
            }
          />  
          <Route path="/about" element={ < About />} />
          <Route path="/contactUs" element={ < ContactUs />} />
          <Route path="/help" element={ < Help />} />
          <Route path="/privacyPolicy" element={ < PrivacyPolicy />} />
        </Routes>
        < Footer />
      </div>
    </Router>
  );
}

export default App;