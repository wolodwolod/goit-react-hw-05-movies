import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation, Link, Outlet } from "react-router-dom";
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

    const location = useLocation()
    const from = location.state?.from || "/";
    console.log(from)
    
    const navigate = useNavigate();
    const goBack = () => navigate(from);    
    
    
    return (
        <main>
            <div className="container">
               
                {loading && <p>...Loading</p>}
               
        <button className={s.button} onClick={goBack}>&#8592; Go back</button>
                {Boolean(Object.keys(data).length) && <MovieDetails data={data} />}

                <li className="list-item"><Link to={`/movies/${movieId}/cast`} state={{from}}>Cast</Link></li>
                <li className="list-item"><Link to={`/movies/${movieId}/reviews`} state={{from}}>Reviews</Link></li>
                    <Outlet />

            </div>
        </main>
    )
};

export default MovieDetailsPage;