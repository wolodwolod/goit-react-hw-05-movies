import s from "./reviews.module.scss"

const ReviewsContent = ({ reviews }) => {
    // const reviews_5 = reviews.slice(0, 5);
    // console.log(reviews);

    return (
      
        <div>           
        <ul className={s.reviewsList}>
      {reviews.map(({ id, author, content }) => (
          <li key={id} className={s.reviewsItem}>
              <h4 className={s.author}> {`Author: ${author}`} </h4>            
              <p className={s.content}>{content}</p>
        </li>      
      ))}
    </ul>  
        </div>
       
    )
};

export default ReviewsContent;