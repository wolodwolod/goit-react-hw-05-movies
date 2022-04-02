import { Routes, Route } from "react-router-dom";
import Navbar from "client/Navbar";
import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import "./shared/styles/style.scss"

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path="/" element = {<HomePage />} />
                <Route path="/movies" element = {<MoviesPage />} />
            </Routes>
        </div>
    );
}

export default App;