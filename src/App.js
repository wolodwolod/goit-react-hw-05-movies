import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "client/Navbar";
import "./shared/styles/style.scss"

const HomePage = lazy(()=> import("./pages/HomePage"));
const MoviesPage= lazy(()=> import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(()=> import("./pages/MovieDetailsPage"));
const Cast = lazy(()=> import("./pages/Cast"));
const Reviews = lazy(()=> import("./pages/Reviews"));
// import NotFoundPage from "pages/NotFoundPage";


function App() {
    return (
        <div className='App'>
            <Navbar />
             <Suspense fallback={<p>...Loading</p>}>
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
             </Suspense>
        </div>
    );
}

export default App;