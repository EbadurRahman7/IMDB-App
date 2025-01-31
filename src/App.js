import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Popular from './pages/Popular';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';
import Movie from './pages/Movie';
import TvShows from './pages/TvShows';
import Show from './pages/Show';

import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/popular" element={<Popular />}/>
          <Route path="/upcoming" element={<Upcoming />}/>
          <Route path="/top-rated" element={<TopRated />}/>
          <Route path="/movie/:id" element={<Movie />}/>
          <Route path="/tv-shows/:id" element={<Show />}/>
          <Route path="/tv-shows" element={<TvShows />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;