import PropTypes from 'prop-types';


import s from "./movie-details.module.scss";



const BASE_URL = "https://image.tmdb.org/t/p/w200"

const MovieDetails = ({ data }) => {
    console.log(data);

    const { poster_path, title, tagline, release_date, vote_average, overview, genres } = data;
    
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
                    
                    </ul>         
                </div>  
            </div>
        </main>
       
    )
};

MovieDetails.propTypes = {
//    PropTypes.objectOf(
    data:PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      tagline: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired
      })),
    })  
  };

export default MovieDetails;