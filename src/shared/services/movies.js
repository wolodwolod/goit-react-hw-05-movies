import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
     
    params: {
        api_key: "f05a275bd04be2a259f3c9758d33fde7",
    }
});

export const getMovies = async () => {
    const { data }  = await instance.get("/trending/movie/day");
    
    return data;
    
}