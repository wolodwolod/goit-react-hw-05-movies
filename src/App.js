import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "client/Navbar";
import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import MovieDetailsPage from "pages/MovieDetailsPage";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";
// import NotFoundPage from "pages/NotFoundPage";
import "./shared/styles/style.scss"

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path="/" element = {<HomePage />} />
                <Route path="/movies/" element={<MoviesPage />} />
                <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
                </Route>                 
                <Route path="*" element = {<Navigate to="/" replace />} />
                {/* <Route path="*" element = {<NotFoundPage />} /> */}
            </Routes>
        </div>
    );
}

export default App;