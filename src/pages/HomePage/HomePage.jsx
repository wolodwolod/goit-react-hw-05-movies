import { useState, useEffect } from "react";
import MoviesList from "shared/components/MoviesList";
import { getMovies } from "../../shared/services/movies";

const HomePage = () => {
    const [state, setState] = useState({
        movies: [],
        loading: false,
        err: null
    });

    useEffect(() => {
        const fetchMovies = async () => {
                                   
            try {
                setState(prevState => ({ ...prevState, loading: true }))
                const data = await getMovies();
                
                console.log(data);
                
                setState(prevState => ({
                    ...prevState,
                    movies: [...prevState.movies, ...data.results],
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({ ...prevState, loading: false, error }))
            }
        };
        fetchMovies();
        
    }, []);

    const { movies, loading } = state;

    return (
        <main>
            <div className="container">
                
                {loading && <p>...Loading</p>}
                {Boolean(movies.length) &&  <h1>Trending today</h1>}
                {Boolean(movies.length) && <MoviesList movies={movies} />}
            </div>
        </main>
        
    )
}

export default HomePage;