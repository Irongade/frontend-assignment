import React from 'react';

// styles
import { Container, Flex, Box } from '../styles/globalStyles'
import { Input, InputSpan, InputDiv } from '../styles/headerStyles'

//assets
import logo from '../images/logo.svg';
import {ReactComponent as InputLogo} from "../images/search-icon.svg"

const Header = ({setSearch}) => {
    return (
        <Container marginY>
            <Flex header spaceBetween>
                <Box>
	                <img src={logo} alt="Timescale" />
                </Box>
                <Box>
                    <InputDiv>
                        <InputSpan>
                            <InputLogo />
                        </InputSpan>
                        <Input data-testid="input-element" type="text" placeholder="Search for a movie" onChange={(event) => setSearch(event.target.value)} />
                    </InputDiv>
                </Box>
            </Flex>
        </Container>
    )
}

export default Header;
