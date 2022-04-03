import { Link } from "react-router-dom";
import s from "./movies-list.module.scss"

const MoviesList = ({ movies }) => {
    const elements = movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
            <li className={s.item} >
{movie.original_title}
            </li>
        </Link>
        
    ))
    return (
        <div>
       <h2 className="page-title">Trending today</h2>
        <ul>
            {elements}
            </ul>
        </div>
    )
};

export default MoviesList;