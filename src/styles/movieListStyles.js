import styled from 'styled-components';
import {breakpoints} from './utilStyles'

export const MovieListHeaderText = styled.h1`
    width: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: Inter, sans-serif;
    line-height: 1.75rem;
    margin-top: 0;
    margin-bottom: 2rem;
`

export const MovieListGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    align-items: flex-start;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    ${breakpoints("grid-template-columns", "", [
        { 900: 'repeat(3, minmax(0px, 1fr))' },
        { 730: 'repeat(2, minmax(0px, 1fr))' },
        { 380: 'repeat(1, minmax(0px, 1fr))' },
    ])};
`
