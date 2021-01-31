import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
position: fixed;
inset: 0px;
background: rgba(0, 0, 0, 0.7);
z-index: 1000;
`;

const Modal = styled.div`
    position: absolute;
    inset: 50% auto auto 50%;
    background: rgb(255, 255, 255);
    border: 1px rgb(136, 136, 136);
    border-radius: 4px;
    margin-right: -50%;
    // width: 85%;
    max-width: 700px;
    max-height: 85%;
    padding: 1em;
    z-index: 1050;
`;

let InsuranceModal = (props) => {
    let {show} = props;
    if(!show){
        return null;
    }
    return (
        <ModalBackground><Modal>
        <ModalTitle>See plan details</ModalTitle>    
        </Modal></ModalBackground>
    )
}

export default InsuranceModal;