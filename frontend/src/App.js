import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderComponent/HeaderComponent';
import HomePage from './pages/HomePage';
import './App.css';
import './styles/fonts.scss'
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/products" element={<ProductsPage currency={currency} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;