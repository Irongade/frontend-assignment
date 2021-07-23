import styled from 'styled-components';
import {breakpoints} from './utilStyles';
import { Text } from './globalStyles';

export const MovieItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    jusify-self: center;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
    height: 348px;
    width: 280px;
    min-width: 280px;
`

export const MovieRatingDiv = styled.div`
    width: 2rem;
    height: 2rem;
    border: .5px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: absolute;
    top: 10px;
    left: 12px;
    z-index: 2;
    background: #fff;
`

export const MoviePosterContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    background: #fff;
    height: 302px;
`

export const MoviePoster = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 302px;
    content-visibility:auto;
`

export const MovieItemFooter = styled.div`
    width: 100%;
    height: 3.4rem;
    padding: 0px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: .875rem;
    font-family: Inter, sans-serif;
    font-weight: 400;   
`

export const MovieItemFooterText = styled(Text)`
    font-size: 1rem;
    line-height: 1.3rem;
    text-align: center;

    ${breakpoints("font-size", "", [
        { 1214: '.8rem' },
    ])};
    ${breakpoints("line-height", "", [
        { 1160: '.95rem' },
        { 1020: '.9rem' },
    ])};
` 