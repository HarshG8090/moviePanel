import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import TopRatedPage from './Pages/TopRatedPage';
import UpcomingPage from './Pages/UpcomingPage';
import MovieDetailPage from './Pages/MovieDetailPage';
import SearchPage from './Pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </Router>

  )
}

export default App
