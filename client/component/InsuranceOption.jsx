import React from 'react';
import styled from 'styled-components';

const Insurance = styled.div`
    cursor: pointer;
    padding-left: 28px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        top: 1px;
        left: 0px;
        width: 20px;
        height: 20px;
        background-color: white;
        border: 1px solid rgb(136, 136, 136);
        border-radius: 3px;
        transition-timing-function: ease-out;
        transition-duration: 200ms;
        transition-property: background-color, border-color;
    }
    &::after{
        position: absolute;
        content: "";
        top: 5px;
        left: 8px;
        width: 5px;
        height: 10px;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        border-top: 0px;
        border-left: 0px;
        transform: rotate(33deg);
        animation: 250ms ease-in-out 0s 1 normal forwards running eWDJnQ;
    }
`;

const PlainText = styled.div`
    display: block;
`;

const EstPrice = styled.span`
    font-size: 19px;
    font-weight: bold;
`;

const DetailPlans = styled.a`
    position: relative;
    text-decoration: underline;
    color: rgb(51, 51, 51);
    font-size: 12px;

    &:focus{
        text-decoration: none;
        outline-style: dashed;
        outline-width: 1px;
    }
    &:hover{
        outline-color: black;
    }
`;

let InsuranceOption = () => {
    return (
        <Insurance>
            <PlainText>Allstate 2 Year Headphones & Speakers Protection Plan with Accidents coverage</PlainText>
            <EstPrice>$5.00 </EstPrice><span><DetailPlans href='#'>See plan details</DetailPlans></span>
        </Insurance>

    );
};

export default InsuranceOption;