import React from 'react';
import {render} from "@testing-library/react";
import MovieList from "../components/MovieList";
import {GlobalProvider} from "../context/globalContext"

it('renders loading state correctly', () => {
    const movies = [];
    const isLoading = true;
    const {getByTestId} = render(<GlobalProvider> <MovieList movies={movies} isLoading={isLoading}/> </GlobalProvider> );

    expect(getByTestId(/loading test/)).toBeTruthy()
})

it('renders empty list correctly', () => {
    const movies = [];
    const isLoading = false;

    const {getByText} = render(<GlobalProvider> <MovieList movies={movies} isLoading={isLoading}/> </GlobalProvider> );

    expect(getByText(/Most Recent Movies/)).toBeTruthy()
    expect(getByText(/Oops! No Movies found!/)).toBeTruthy()

})

it('renders list correctly', () => {
    const movies = [{
        id: 100234,
        vote_average: 5,
        poster_path: '/sahsjavjsavcjvcjhsavc.jpg',
        title: 'Testing'
    }];

    const isLoading = false;

    const {getByText, getByAltText} = render(<GlobalProvider> <MovieList movies={movies} isLoading={isLoading}/> </GlobalProvider> );

    expect(getByText(/Testing/)).toBeTruthy()
    expect(getByText(/5/)).toBeTruthy()
    expect(getByAltText(/movie poster 100234/)).toBeTruthy()
})

