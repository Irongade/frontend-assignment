import React from 'react'
import moment from 'moment';

// styles
import { Box, Flex } from '../styles/globalStyles';
import { ModalContainer, ModalWrapper, ModalTitle, ModalPoster, ModalText, Span } from '../styles/modalStyles';

// assets
import {ReactComponent as CloseModalIcon} from '../images/close-icon.svg'

// contexts
import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext"

const Modal = () => {
    const {showModal, currentModalItem} = useGlobalStateContext();
    const dispatch = useGlobalDispatchContext();

    const closeModal = () => {
        dispatch({
            type: 'CLOSE_MODAL',
            payload: {
                showModal: !showModal
            }
        }) 
    }

    return (
        <ModalContainer onClick={closeModal} visible={showModal}>
            <ModalWrapper visible={showModal}>
                <Flex spaceBetween>
                    <ModalTitle>
                        {currentModalItem.title}
                    </ModalTitle>
                    <div onClick={closeModal}>
                        <CloseModalIcon />
                    </div>
                </Flex>

                <Flex alignItems="flex-start" spaceBetween>
                    <Box halfWidth>
                        <ModalPoster alt="movie poster" src={`${process.env.REACT_APP_API_BASE_IMAGE_URL + currentModalItem.poster_path}`} />
                    </Box>
                    <Box width="45%">
                        <Box marginY="20px">
                            <ModalText modalText={true} lineHeight="1.0588rem"> <Span> Release Date: </Span> {moment(currentModalItem.release_date).format('MMM DD, YYYY')} </ModalText>
                        </Box>

                        <Box marginY="20px">
                            <ModalText modalText lineHeight="1.0588rem"> 
                                {currentModalItem.overview}
                            </ModalText>
                        </Box>
                        <Box marginY="20px">
                            <ModalText modalText lineHeight="1.0588rem">
                                <Span>{currentModalItem.vote_average} </Span> / 10 ({currentModalItem.vote_count} total votes)
                            </ModalText>
                        </Box>
                    </Box>
                </Flex>
            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal;
