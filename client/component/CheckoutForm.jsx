import React from 'react';
import style from 'styled-components';

const Fulfillment = style.div`
    display: flex;
    border: 5px dotted maroon;
`;
const FulfillmentButton = style.button`
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

    &:active{ 
        background-color: rgb(121, 0, 0);
        border-color: rgb(121, 0, 0);
     }
`;

function CheckoutForm(props) {

    return (
        <Fulfillment>{props.children}
        <FulfillmentButton>{props.buttonText}</FulfillmentButton>
        </Fulfillment>
    )
};

export default CheckoutForm;