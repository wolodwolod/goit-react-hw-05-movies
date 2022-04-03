import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../shared/services/movies";

// import s from "./movie-details.module.scss"
import SingleMovie from "pages/SingleMovie";

const MovieDetailsPage = () => {

const [state, setState] = useState({
        data: {},
        loading: false,
        err: null
});
    
    const { movieId } = useParams();
    // const BASE_URL = "https://image.tmdb.org/t/p/w200"
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

    // const { id, poster_path, title, tagline, release_date, vote_average, overview, genres } = data;
    // const listOfGenres = [...new Set(genres.map(genre => genre.name))];
    // console.log(genres);
    // console.log(release_date);


    return (
        <main>
            <div className="container">
               
                {loading && <p>...Loading</p>}
               
                <button onClick={goBack}>Go back</button>
                {Boolean(Object.keys(data).length) && <SingleMovie data={data} />}
                {/* Boolean(Object.keys(data).length) 
             */}
                {/* <div className={s.basic}>
                    <div className={s.basicPoster}>
                        <img className={s.basicPoster__Img} src={`${BASE_URL}${poster_path}`} alt={tagline} />
                    </div>
                    <div className={s.basicInfo}>
                        <h2>{`${title} (${release_date.substr(0, 4)})`}</h2>
                        <p>User score: {`${Number(vote_average) * 10}%`}</p>
                        <h3 className={s.title}>Overview</h3>
                        {overview}
                        <h4 className={s.title}>Genres</h4>
                        {listOfGenres.join(' ')}
                    </div>
                </div>
                <div className={s.add}>
                    <h4 className={s.title}> Additional information</h4>
                    <ul>
                    <li><Link to={`/movies/${id}/cast`}>Cast</Link></li>
                        <li><Link to={`/movies/${id}/reviews`}>Reviews</Link></li>
                        <Outlet />
                    </ul>         
                </div> */}
               

            </div>
        </main>
    )
};

export default MovieDetailsPage;