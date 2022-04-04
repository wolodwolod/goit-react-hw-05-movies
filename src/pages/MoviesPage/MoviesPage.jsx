import { useState, useEffect, useRef, useCallback } from "react";
// import MoviesList from "pages/MoviesList";
import { searchMovies } from "../../shared/services/movies";
import MoviesList from "pages/MoviesList";
import SearchForm from "shared/components/SearchForm";
import s from "./movies-page.module.scss";

const MoviesPage = () => {
    const [state, setState] = useState({
        query: "",
        movies: [],
        loading: false,
        err: null
    });
    const { query, movies, loading, error } = state;

    const firstRenderRef = useRef(true);

    useEffect(() => {

        if (firstRenderRef.current) {
    firstRenderRef.current = false;
        } else {
            const fetchMovies = async () => {
                                   
            try {
                setState(prevState => ({ ...prevState, loading: true }))
                const data = await searchMovies(query);
                
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
        fetchMovies();}        
        
    }, [query]);

    const changeQuery = useCallback(({ search }) => {
        setState({
            ...state,
            query: search
        }
           
        )
        console.log(search);
        console.log(query);
        
    }, [query, state]);


    return (
        <main>
            <div className="container">
 <div className={s.searchContainer}>
                <SearchForm onSubmit={changeQuery} />
            </div>
            
            {error && <h2>Search error</h2>}
            {!movies.length && query && !loading && !error && <h2>We don't have any movies for this search</h2>}
                
                {loading && <p>...Loading</p>}
                {Boolean(movies.length) && <MoviesList movies={movies} />}
            </div>
        </main>
        
    )
}

export default MoviesPage;