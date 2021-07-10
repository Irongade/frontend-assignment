import styled, {css, keyframes} from "styled-components";
import {breakpoints} from './utilStyles';

export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    
    @media (min-width: 1024px) {
        max-width: 960px;
    }
    @media (min-width: 1216px) {
        max-width: 1152px;
    }
    @media (min-width: 1408px) {
        max-width: 1216px;
    }
    ${props => props.fluid && css`
        padding: 0;
        margin: 0;
        max-width: 100%;
    `}
    ${
        props => props.marginY && css`
           margin-top: 2rem;
           margin-bottom: 2rem;
        `
    }
`

export const Text = styled.p`
    margin: 0;
    width: auto;
    font-family: Inter, san-serif;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
    color:  ${props => props.fontColor};
    font-size:  ${props => props.textSize ? props.textSize : '.875rem'};
    text-align: ${props => props.textAlign};
    line-height: ${props => props.lineHeight}
`

export const Box = styled.div`
    position: relative;
    height: auto;
    width: ${props => props.width ? props.width : 'auto'};
    ${
        props => props.halfWidth && css`
            width: 50%;
        `
    }
    ${
        props => props.marginY && css`
           margin-top: ${props => props.marginY};
           margin-bottom: ${props => props.marginY};
           ${breakpoints("margin-top", "", [
            { 1000: '10px' },
            { 500: '5px' },
        ])};
        ${breakpoints("margin-bottom", "", [
            { 1000: '10px' },
            { 500: '5px' },
        ])};
        `
    }
`

export const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    flex-direction: row;
    ${
        props => props.header && css`
            ${breakpoints("flex-direction", "", [
                { 400: 'column' },
            ])};
        `
    }
    ${
        props => props.halfWidth && css`
            width: 50%;
            ${breakpoints("width", "", [
                { 730: '100%' },
            ])};
        `
    }
    ${
        props => props.spaceBetween && css`
            justify-content: space-between;
        `
    }

`

const loadingAnimation = keyframes`
    0%  {
        border-color: #EDF2F7;
        background: #EDF2F7;
    }
    100% {
        border-color: #A0AEC0;
        background: #A0AEC0;
    }
`

export const LoadingSkeleton = styled.div`
    opacity: 0.7;
    border-radius: 2px;
    border-color: #EDF2F7;
    background: #A0AEC0;
    -webkit-animation: 0.8s linear infinite alternate ${loadingAnimation};
    animation: 0.8s linear infinite alternate ${loadingAnimation};
    box-shadow:none;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    cursor: default;
    color: transparent;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${
        props => props.h && css`
            height: ${props => props.h};
        `
    }
`
