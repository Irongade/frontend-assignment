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

const MovieService = {
    getRecentMovies
}

export default MovieService;