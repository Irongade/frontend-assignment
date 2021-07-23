
import styled from 'styled-components';

export const InputDiv = styled.div`
    height: 2.6rem;
    border-radius: 1px;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: #C0C4CC;
    background: inherit;
    padding-inline-start: 2rem;
    padding-inline-end: 1rem;
    background: #fff;
    padding-top: 3px;
    padding-bottom: 3px;
`

export const Input = styled.input`
    width: 100%;
    min-width: 0px;
    outline: transparent;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    font-size: 0.75rem;
    font-family: Inter, sans-serif;
    height: 2.5rem;
    border-radius: 0;
    border-width: 0;
    background: inherit;
    color: #898E9A;
`
export const InputSpan = styled.div`
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    width: 1.25rem;
    height: 1.5rem;
    display: inherit;
    position: absolute;
    top: 20%;
    left: 0;
    z-index: 2;
    padding: 0.5rem;
`