import React from 'react';
import {render} from "@testing-library/react";
import MovieItem from "../components/MovieItem";
import {GlobalProvider} from "../context/globalContext"

it('renders correctly', () => {
    const movie = {
        id: 100234,
        vote_average: 5,
        poster_path: '/sahsjavjsavcjvcjhsavc.jpg',
        title: 'Testing'
    };

    const {getByText, getByAltText} = render(<GlobalProvider> <MovieItem movie={movie}/> </GlobalProvider> );

    expect(getByText(/Testing/)).toBeTruthy()
    expect(getByText(/5/)).toBeTruthy()
    expect(getByAltText(/movie poster 100234/)).toBeTruthy()
})
