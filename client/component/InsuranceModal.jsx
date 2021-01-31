import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    inset: 0px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;

const ModalTitle = styled.h2`
    font-style: normal;
    letter-spacing: 0px;
    text-indent: 0px;
    text-shadow: none;
    text-transform: none;
    vertical-align: baseline;
    white-space: normal;
    color: rgb(51, 51, 51);
    font-weight: bold;
    line-height: 1.25;
    font-size: 23px;
    margin: 0px 0px 8px;
`;

const Modal = styled.div`
    position: absolute;
    inset: 25% 25% auto 25%;
    background: rgb(255, 255, 255);
    border: 1px rgb(136, 136, 136);
    border-radius: 4px;
    margin-right: -50%;
    width: 85%;
    max-width: 700px;
    max-height: 85%;
    padding: 1em;
    z-index: 1050;
`;

const BenefitList = styled.ul`
    list-style: outside none none;
    margin: 0px;
    padding: 0px;
    margin-block: 0px;
    margin-inline: 0px;
    padding-inline-start: 0px;
`;

const CloseButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    height: 20px;
    width: 20px;
    background-color: rgb(51, 51, 51);
    color: white;
    border: 0px;
    border-radius: 100%;

    &:focus{
        outline: rgb(51, 51, 51) dashed 1px;
        outline-offset: 2px;
    }
`;

const TaC = styled.a`
    position: relative;
    text-decoration: underline;
    color: rgb(51, 51, 51);
    background-color: transparent;

    &:focus{
        text-decoration: none;
        outline-style: dashed;
        outline-width: 1px;
        outline-color: rgb(51, 51, 51);
    };
    &:active, &:hover{
        text-decoration: none;
        outline: 0px;
    };
`;
let InsuranceModal = (props) => {
    let {show} = props;
    if(!show){
        return null;
    }
    return (
        <ModalBackground onClick={props.close}><Modal>
        <ModalTitle>See plan details</ModalTitle>
        <BenefitList>
            <li><span><b>Benefits:</b> No Deductible, No Additional Cost, 24/7 Support, Free 2-Way Shipping</span></li>
            <li><span><b>Support:</b> In-person, Online</span></li>
            <li><span><b>Includes:</b> Normal Wear and Tear Coverage</span></li>
            <li><span><b>Minimum Qualifying Item Price:</b> 10</span></li>
            <li><span><b>Maximum Qualifying Item Price:</b> 99.99</span></li>
            <li><span><b>Service plan type:</b> Quiver - Cat Toys</span></li>
            <li><span><b>Number of years protected:</b> 2 years</span></li>
            <TaC href='#'>Terms and Conditions</TaC>
        </BenefitList>
        <CloseButton><span style={{'fontWeight': 'bold'}}>X</span></CloseButton>  
        </Modal></ModalBackground>
    )
}

export default InsuranceModal;