import React from 'react';
import style from 'styled-components';

const Fulfillment = style.div`
    display: flex;
    border: 5px dotted maroon;
`;

function CheckoutForm(props) {

    return (
        <Fulfillment>{props.children}</Fulfillment>
    )
};

export default CheckoutForm;