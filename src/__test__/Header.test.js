import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import Header from "../components/Header";

it('renders image component correctly', () => {
    const {getByAltText} = render(<Header  />);
    expect(getByAltText(/Timescale/)).toBeTruthy();
})

it('renders input element correctly', () => {
    const {queryByPlaceholderText, queryByTestId} = render(<Header  />);

    expect(queryByPlaceholderText(/Search for a movie/)).toBeTruthy();
    expect(queryByTestId('input-element')).toBeTruthy();
})

describe('Input value', () => {
    it('updates on change', () => {
        const setSearch = jest.fn();
        const {queryByPlaceholderText} = render( <Header setSearch={setSearch}  />);
        const searchInput = queryByPlaceholderText('Search for a movie');

        fireEvent.change(searchInput, {target: {value: 'test'}});

        expect(searchInput.value).toBe('test');
    })
})
