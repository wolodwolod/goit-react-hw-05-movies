import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
// import { useRef } from "react";
// import MoviesList from "pages/MoviesList";
import { searchMovies } from "../../shared/services/movies";
import MoviesList from "shared/components/MoviesList";
import SearchForm from "shared/components/SearchForm";
import s from "./movies-page.module.scss";

const MoviesPage = () => {
    const [state, setState] = useState({
        // query: "",
        movies: [],
        loading: false,
        err: null
    });
    const { movies, loading, error } = state;

    const [queryParams, setQueryParams] = useSearchParams();
    const query = queryParams.get("query");

    // const firstRenderRef = useRef(true);

    useEffect(() => {

    //     if (firstRenderRef.current) {
    // firstRenderRef.current = false;
    //     }
        if(!query){
   return;
}
        else {
            const fetchMovies = async () => {
                                   
            try {
                setState(prevState => ({ ...prevState, loading: true }))
                const data = await searchMovies(query);
                
                console.log(data);
                
                setState(prevState => ({
                    ...prevState,
                    movies: [...data.results],
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({ ...prevState, loading: false, error }))
            }
        };
        fetchMovies();}        
        
    }, [query]);

    const changeQuery = useCallback(({ query }) => {
        setQueryParams({ query })
        // console.log(search);
        // console.log(query);
        
    }, [setQueryParams]);


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