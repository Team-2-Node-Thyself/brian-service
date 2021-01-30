import React from 'react';
import styled from 'styled-components';

const PPDivs = styled.div`
    font-size: 14px;
`;

const SButton = styled.button`
    font-family: inherit;
    color: rgb(51, 51, 51);
    padding: 0;
    font-size: 14px;
    position: relative;
    border: none;
    cursor: pointer;
    background-color: transparent;
    text-decoration: underline;
    display: flex;
    align-self: flex-start;
    &:hover{
        text-decoration: none;
    }
    &:focus{
        text-decoration: none;
        outline: black dashed 1px;

    }
`;

const PPBold = styled.span`
    font-weight: bold;
    font-size: 14px;
`;

const PPOr = styled(PPBold)`
    padding: 12px 0px;
`;

let PaymentPlans = (props) => {
    let {price} = props;
    return (
        <>
        <PPDivs>Save 5% every day with ArrowCard</PPDivs>
        <SButton>Learn More</SButton>
        { (price > 50) && 
        <>
            <PPOr>Or</PPOr>
            <PPDivs>Starting at <PPBold>${((125/12*.15)+(125/12)).toFixed(2)}/month</PPBold> on $100+ orders with <PPBold>affirm</PPBold></PPDivs>
            <SButton>Learn More</SButton>
        </>
        }
        </>
    );
}

export default PaymentPlans;