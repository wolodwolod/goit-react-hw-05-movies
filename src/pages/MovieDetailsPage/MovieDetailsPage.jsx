import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../shared/services/movies";
import MovieDetails from "./MovieDetails";
import s from "./movie-details.module.scss";

const MovieDetailsPage = () => {

const [state, setState] = useState({
        data: {},
        loading: false,
        err: null
});
    
    const { movieId } = useParams();
       // console.log(movieId);

    useEffect(() => {
        const fetchMovieDetails = async () => {
                                   
            try {
                setState(prevState => ({ ...prevState, loading: true }))
                const data = await getMovieDetails(movieId);
                
                console.log(data);
                
                setState(prevState => ({
                    ...prevState,
                    data,
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({ ...prevState, loading: false, error }))
            }
        };
        fetchMovieDetails();
        
    }, [movieId]);

    const { data, loading } = state;

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    
    return (
        <main>
            <div className="container">
               
                {loading && <p>...Loading</p>}
               
        <button className={s.button} onClick={goBack}>&#8592; Go back</button>
                {Boolean(Object.keys(data).length) && <MovieDetails data={data} />}    

            </div>
        </main>
    )
};

export default MovieDetailsPage;