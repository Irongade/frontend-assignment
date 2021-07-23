import axios from "axios";
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const getRecentMovies = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}/language=en-US&page=1`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )
    return response
}

const getImage = async (posterPath) => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_IMAGE_URL + posterPath}`, {responseType: 'blob'});

    return response.data
}

const searchMovies = async (query) => {
    const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )
    return response
}

const MovieService = {
    getRecentMovies,
    getImage, 
    searchMovies
}

export default MovieService;