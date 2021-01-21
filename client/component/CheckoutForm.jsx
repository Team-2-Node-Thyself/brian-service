import React from 'react';
import styled from 'styled-components';

const Fulfillment = styled.div`
    display: flex;
    border: 5px dotted maroon;
    background: rgb(247, 247, 247);
    padding: 12px 16px;
`;
const FulfillmentButton = styled.button`
    font-size: 15px;
    flex-basis: 50%;
    background-color: rgb(204, 0, 0);
    color: white;
    border: 1px solid rgb(204, 0, 0);
    vertical-align: middle;
    white-space: nowrap;
    text-align: center;
    position: relative;
    padding: 0px 8px;
    height: 32px;
    margin: 0px;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-left: 4px !important;

     &:hover{
        background-color: rgb(170, 0, 0);
        border-color: rgb(170, 0, 0);
     };
    &:active{ 
        background-color: rgb(121, 0, 0);
        border-color: rgb(121, 0, 0);
        outline: none;
     };
     &:focus{
         outline: none;
     };
`;

function CheckoutForm(props) {

    return (
        <Fulfillment>
            {props.children}<FulfillmentButton>{props.buttonText}</FulfillmentButton>
        </Fulfillment>
    )
};

export default CheckoutForm;