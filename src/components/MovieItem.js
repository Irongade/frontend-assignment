import React from 'react';

// styles
import { Text, Box } from '../styles/globalStyles';
import { MovieItemContainer, MovieRatingDiv, MovieItemFooter, MoviePoster, MoviePosterContainer } from '../styles/movieItemStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext"

const MovieItem = ({movie}) => {
    const dispatch = useGlobalDispatchContext();
    const {showModal} = useGlobalStateContext();

    const openModal = () => {
        dispatch(
            {type: 'OPEN_MODAL', payload: {movie, showModal: !showModal}
        });
    }

    return (
            <MovieItemContainer onClick={openModal}>
                <MovieRatingDiv>
                    <Text fontSize=".75rem" fontWeight="600">
                        {movie.vote_average}
                    </Text>
                </MovieRatingDiv>
    
                <MoviePosterContainer>
                    <MoviePoster loading="lazy" alt={`movie poster ${movie.id}`} src={`${process.env.REACT_APP_API_BASE_IMAGE_URL + movie.poster_path}`} />          
                </MoviePosterContainer>
                
                <MovieItemFooter>
                    <Box>
                        <Text lineHeight="1.625rem" textSize="1rem" textAlign="center">
                            {movie.title}
                        </Text>
                    </Box>
                </MovieItemFooter> 
            </MovieItemContainer>

    )
}

export default MovieItem;
