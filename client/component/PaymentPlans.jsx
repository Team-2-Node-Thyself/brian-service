import React from 'react';
import styled from 'styled-components';

const Savings = styled.div`
    font-size: 14px;
`;

const SButton = styled.button`
    font-family: inherit;
    font-size: 14px;
    position: relative;
    border: none;
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

const PPOr = styled.div`
    font-weight: bold;
    font-size: 14px;
    padding: 12px 0px;
`;

const PPOption = styled.div`
`;

let PaymentPlans = (props) => {
    let {price} = props;
    return (
        <>
        <Savings>Save 5% every day with ArrowCard</Savings>
        <SButton>Learn More</SButton>
        <PPOr>Or</PPOr>
        <PPOption>Starting at $14.44/month on $100+ orders with</PPOption>
        <SButton>Learn More</SButton>
        </>
    );
}

export default PaymentPlans;