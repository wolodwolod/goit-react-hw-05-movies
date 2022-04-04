import { Link, Outlet } from "react-router-dom";
import s from "./movie-details.module.scss";



const BASE_URL = "https://image.tmdb.org/t/p/w200"

const MovieDetails = ({ data }) => {
    console.log(data);

    const { id, poster_path, title, tagline, release_date, vote_average, overview, genres } = data;
    
    console.log(genres);
    console.log(release_date);
const listOfGenres = [...new Set(genres.map(genre => genre.name))];

    return (
        <main>
            <div className="container">
          <div className={s.basic}>
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
                    <ul className={s.addList}>
                     <li className="list-item"><Link to={`/movies/${id}/cast`}>Cast</Link></li>
                     <li className="list-item"><Link to={`/movies/${id}/reviews`}>Reviews</Link></li>
                    <Outlet />
                    </ul>         
                </div>  
            </div>
        </main>
       
    )
};

export default MovieDetails;