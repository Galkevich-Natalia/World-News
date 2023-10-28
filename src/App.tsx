import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/reset.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreType } from './redux/store';
import { useEffect } from 'react';
import { fetchNews } from './redux/reducers/newsDataReducer/newsDataReducer';
import { ThemeContextProvider } from './contexts/themeContext/themeContext';
import { AuthorizedContextProvider } from 'contexts/authContext/authContext';
import { CheckAuthorizedUser } from 'helpers/privatePages/privatePages';
import { About, Body, ContactUs, Empty, FilterNews, Footer, Header, Help,
  LoginForm, News, PrivacyPolicy, SearchPage, SignUpForm, SingleNews } from 'components';

function App() {

  const newsDataFromRedux = useSelector((state: StoreType) => state.newsDataCards.newsData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNews())
  }, []);

  return (
    <AuthorizedContextProvider>
      <ThemeContextProvider>
        <Router>
          <div className="App">
            <Body>
              < Header />
              <Routes>
                <Route path="/" element={< News />} />
                <Route path="/signup" element={
                  <CheckAuthorizedUser>
                    < SignUpForm />
                  </CheckAuthorizedUser>
                }
                />
                <Route path="/login" element={
                  <CheckAuthorizedUser>
                    < LoginForm />
                  </CheckAuthorizedUser>
                }
                />
                <Route path="/category/:category" element={< FilterNews />} />
                <Route
                  path="/news/:uri/editNews"
                  element={
                    < SingleNews />
                  }
                />
                <Route path="/search" element={< SearchPage />}></Route>
                <Route path="/about" element={< About />} />
                <Route path="/contactUs" element={< ContactUs />} />
                <Route path="/help" element={< Help />} />
                <Route path="/privacyPolicy" element={< PrivacyPolicy />} />
                <Route path="*" element={< Empty />} />
              </Routes>
              < Footer />
            </Body>
          </div>
        </Router>
      </ThemeContextProvider>
    </AuthorizedContextProvider>
  );
}

export default App;