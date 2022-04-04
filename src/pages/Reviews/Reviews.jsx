import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../shared/services/movies";
import ReviewsContent from "./ReviewsContent";
// 
// import s from "./reviews.module.scss"


const Reviews = () => {

const [state, setState] = useState({
        reviews: [],
        loading: false,
        err: null
});
    
    const { movieId } = useParams();
    console.log(movieId);
      

    useEffect(() => {
        const fetchMovieReviews = async () => {
                                   
            try {
                setState(prevState => ({ ...prevState, loading: true }))
                const data = await getMovieReviews(movieId);
                
                // console.log(data.results);
                
                setState(prevState => ({
                    ...prevState,
                    reviews: [...prevState.reviews, ...data.results],                    
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({ ...prevState, loading: false, error }))
            }
        };
        fetchMovieReviews();
        
    }, [movieId]);

    const { reviews, loading } = state;

    return (
        <main>         
            <div className="container">
                {loading && <p>...Loading</p>}
            
                {Boolean(reviews.length) ? <ReviewsContent reviews={reviews} /> :
                    <p>We don't have any reviews for this movie</p>}            

            </div>           
        </main>      
    )
};

export default Reviews;