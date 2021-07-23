import React, {useEffect, useState, useRef} from 'react';

// styles
import { Text, Box, Flex, LoadingSkeleton } from '../styles/globalStyles';
import { MovieItemContainer, MovieRatingDiv, MovieItemFooter, MoviePoster, MoviePosterContainer, MovieItemFooterText } from '../styles/movieItemStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext";

//service
import MovieService from "../service/movieService";

// hooks
import useIntersection from '../hooks/useIntersection';

const MovieItem = ({movie}) => {
    const dispatch = useGlobalDispatchContext();
    const {showModal} = useGlobalStateContext();

    const openModal = () => {
        dispatch(
            {type: 'OPEN_MODAL', payload: {movie, showModal: !showModal}
        });
    }

    const [image, setImage] = useState('');
    const [hasImageLoaded, setHasImageLoaded] = useState(false)
    const imgRef = useRef();
    const inViewPort = useIntersection(imgRef, '-200px')

    useEffect(() => {
        async function getImage() {
            try {
                if(inViewPort) {
                    setHasImageLoaded(false)
                    const blobImg = await MovieService.getImage(movie.poster_path)
                    let img = URL.createObjectURL(blobImg);
                    setImage(img)
        
                    setHasImageLoaded(true)
                }
            } catch(err) {
                console.log(err)
            }
        }
        getImage();
       
    }, [movie.poster_path, inViewPort])

    return (
        <Flex justifyCenter>
            <MovieItemContainer ref={imgRef} onClick={openModal}>
                <MovieRatingDiv>
                    <Text fontSize=".75rem" fontWeight="600">
                        {movie.vote_average}
                    </Text>
                </MovieRatingDiv>
    
                <MoviePosterContainer>
                    {
                        hasImageLoaded ? 
                            <MoviePoster loading="lazy" alt={`movie poster ${movie.id}`} src={image} />          
                            : <LoadingSkeleton h="302px" /> 
                    }
                </MoviePosterContainer>
                
                <MovieItemFooter>
                    <Box lineClamp>
                        <MovieItemFooterText>
                            {movie.title}
                        </MovieItemFooterText>
                    </Box>
                </MovieItemFooter> 
            </MovieItemContainer>

        </Flex>

    )
}

export default MovieItem;
