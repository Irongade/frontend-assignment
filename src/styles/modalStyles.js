import styled, {css} from 'styled-components';
import {breakpoints} from './utilStyles';
import { Text } from './globalStyles';

export const ModalContainer = styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
    opacity: 0;
    transition: opacity 250ms 700ms ease;

    ${
        props => props.visible && css`
            pointer-events: auto;
            opacity: 1;
            transition: all 300ms ease-in-out;
        `
    }
`

export const ModalWrapper = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    display: block;
    width: 40vw;
    height: auto;
    min-width: 260px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #fff;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(0, 0, 0, 0.7);
    opacity: 0;
    transform: scale(0.6);
    transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
    transform: scale(0);

    ${
        props => props.visible && css`
            opacity: 1;
            transform: scale(1);
            transition: opacity 250ms 500ms ease, transform 350ms 500ms ease;
        `
    }

    ${breakpoints("padding", "", [
        { 700: '10px 10px' },
    ])};

    ${breakpoints("width", "", [
        { 1180: '50vw' },
        { 1000: '55vw' },
        { 800: '70vw' },
        { 500: '80vw' },
    ])};
`

export const ModalText = styled(Text)`
    font-size: .875rem;
    ${breakpoints("font-size", "", [
        { 1145: '.8rem' },
        { 750: '.6rem' },
        { 500: '.5rem' },
    ])};
    ${breakpoints("line-height", "", [
        { 600: '.73rem' },
        { 500: '.7rem' },
    ])};
`

export const ModalTitle = styled.h2`
    width: 80%;
    font-weight: 700;
    font-size: 1.125rem;
    font-family: Inter, sans-serif;
    line-height: 1.75rem;
` 

export const ModalPoster = styled.img`
    width: 100%;
    height: auto;
    max-width: 300px;
` 
export const Span = styled.span`
    font-weight: 600;
`
  