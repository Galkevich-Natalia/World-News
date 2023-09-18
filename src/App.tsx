import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/general/components/header/header';

function App() {
  return (
    <Router>
      <div className="App">
        < Header />
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