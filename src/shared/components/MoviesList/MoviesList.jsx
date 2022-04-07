import PropTypes from 'prop-types';

import { Link, useLocation } from "react-router-dom";
// import s from "./movies-list.module.scss"


const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location)

  const elements = movies.map(movie => (
      <li className="list-item" key={movie.id}>
        <Link state={{from: location}} to={`/movies/${movie.id}`}>             
        {movie.title}
      </Link>            
    </li>
       
        
    ))
    return (
        <div>
      
        <ul>
            {elements}
            </ul>
        </div>
    )
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,      
    })
  ),
  };


export default MoviesList;