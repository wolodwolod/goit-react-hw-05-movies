import s from "./cast.module.scss"

const BASE_URL = "https://image.tmdb.org/t/p/w200"

const CastContent = ({ cast }) => {
    const cast_10 = cast.slice(0, 10);
    console.log(cast_10);

    return (
        <div>           
        < ul className={s.castList}>
      {cast_10.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id} className={s.castItem}>
              {profile_path && <img className={s.castItem__Img} src={`${BASE_URL}${profile_path}`} alt={name} /> }
              
              <h4 className={s.name}> {name}</h4>  
              <p className={s.character}>{`Character: ${character}`}</p>
        </li>      
      ))}
    </ul>  
        </div>
       
    )
};

export default CastContent;