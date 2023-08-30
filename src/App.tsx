import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

const App: React.FC = () => {
  return (
    <Router>
{/*       
      <nav>
        <ul>
          <li><Link to="/">Berita</Link></li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;