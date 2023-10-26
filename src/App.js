import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Movie, People, SearchList, SingleMovie, SinglePeople, SingleTv, Tv } from "./pages";
import Header from "./containers/Header";

function  App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/single-movie/:id" element={<SingleMovie />} />
            <Route path="/tv/:id" element={<SingleTv />} />
            <Route path="/search/:searchQuery" element={<SearchList />} />
            <Route path="/people" element={<People/>} />
            <Route path="/single-person/:id" element={<SinglePeople/>} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
