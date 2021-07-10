import React from 'react';
import {render} from "@testing-library/react";
import Modal from "../components/Modal";
import {GlobalProvider} from "../context/globalContext"

it('renders correctly', () => {
    const currentModalItem = {
        id: 100234,
        vote_average: 5,
        poster_path: '/sahsjavjsavcjvcjhsavc.jpg',
        title: 'Testing'
    };

    const {getByText} = render(<GlobalProvider value={currentModalItem}> <Modal/> </GlobalProvider> );

    expect(getByText(/Army of the dead/)).toBeTruthy()
    expect(getByText(/May 13, 2021/)).toBeTruthy()
    expect(getByText(/Lorem ipsum.../)).toBeTruthy()
})
