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

let PaymentPlans = (props) => {
    return (
        <>
        <Savings>Save 5% every day with ArrowCard</Savings>
        <SButton>Learn More</SButton>
        </>
    );
}

export default PaymentPlans;