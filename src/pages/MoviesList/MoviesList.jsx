import { Link } from "react-router-dom";
// import s from "./movies-list.module.scss"

const MoviesList = ({ movies }) => {
    const elements = movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
            <li className="list-item" >
{movie.title}
            </li>
        </Link>
        
    ))
    return (
        <div>
      
        <ul>
            {elements}
            </ul>
        </div>
    )
};

export default MoviesList;