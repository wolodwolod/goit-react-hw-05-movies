import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../shared/services/movies";
import CastContent from "./CastContent";


const Cast = () => {

const [state, setState] = useState({
        cast: [],
        loading: false,
        err: null
});
    
    const { movieId } = useParams();
      

    useEffect(() => {
        const fetchMovieCredits = async () => {
                                   
            try {
                setState(prevState => ({ ...prevState, loading: true }))
                const data = await getMovieCredits(movieId);
                
                console.log(data);
                
                setState(prevState => ({
                    ...prevState,
                    cast: [...prevState.cast, ...data.cast],                    
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({ ...prevState, loading: false, error }))
            }
        };
        fetchMovieCredits();
        
    }, [movieId]);

    const { cast, loading } = state;

    return (
        <main>         
            <div className="container">
                {loading && <p>...Loading</p>}
                {Boolean(cast.length) && <CastContent cast={cast}/>}              
            </div>           
        </main>      
    )
};

export default Cast;
