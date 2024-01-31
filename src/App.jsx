import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MoviesList from "./pages/MoviesList";
import Navbar from "./components/Navbar";
import MovieBooking from "./pages/MovieBooking";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <Navbar />
      </Link>
      <Routes>
        <Route exact path="/" element={<MoviesList />} />
        <Route exact path="/bookmovie/:id" element={<MovieBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
