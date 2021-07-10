import React from 'react';

// components
import MovieItem from './MovieItem';

// styles
import { Container, Text, Flex, LoadingSkeleton } from '../styles/globalStyles'
import { MovieListHeaderText, MovieListGrid } from '../styles/movieListStyles'

const MovieList = ({movies, isLoading}) => {
    return (
        <Container marginY>
            <MovieListHeaderText>
                Most Recent Movies
            </MovieListHeaderText>

            <MovieListGrid>
                {
                    isLoading && <>
                        <LoadingSkeleton data-testid="loading test" h="350px" />
                        <LoadingSkeleton h="350px" />
                        <LoadingSkeleton h="350px" />
                        <LoadingSkeleton h="350px" />
                        <LoadingSkeleton h="350px" />
                        <LoadingSkeleton h="350px" />
                        <LoadingSkeleton h="350px" />
                        <LoadingSkeleton h="350px" />
                    </>
                }
                {
                    !isLoading && movies.length > 0 && movies.map(movie => <MovieItem movie={movie} key={movie.id} />)
                }

                {
                    !isLoading && movies.length < 1 && <Flex>
                        <Text> Oops! No Movies found!  </Text>
                    </Flex>
                }
            </MovieListGrid>
        </Container>
    )
}

export default MovieList;
