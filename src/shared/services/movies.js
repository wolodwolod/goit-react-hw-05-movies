import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
     
    params: {
        api_key: "f05a275bd04be2a259f3c9758d33fde7",
        language: "en-US",
    }
});

export const getMovies = async () => {
    const { data } = await instance.get("/trending/movie/day");
    return data;
};

export const getMovieDetails = async movieId => {
    const { data } = await instance.get(`/movie/${movieId}`);
    return data;
};

export const getMovieCredits = async movieId => {
    const { data } = await instance.get(`/movie/${movieId}/credits`);
    return data;
};

export const getMovieReviews = async movieId => {
    const { data } = await instance.get(`/movie/${movieId}/reviews`);
    return data;
};
export const searchMovies = async query => {
    const { data } = await instance.get(`/search/movie`, {
        params: {
            query,            
        }
    });
    return data;
};