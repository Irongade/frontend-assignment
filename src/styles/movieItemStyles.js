import styled from 'styled-components';

export const MovieItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 8px;
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
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
`

export const MoviePoster = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100%;
    content-visibility:auto;
`

export const MovieItemFooter = styled.div`
    width: 100%;
    height: 3.4rem;
    border-radius: 0 0 8px 8px;
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