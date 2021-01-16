import React from 'react';

let Price = (props) => {
    var {price, discount} = props.product;
    if(price !== undefined){
        price = price.toFixed(2);
    }
    return (
        <>
            <div>Price: {price}</div>
            <div>Discount: {discount}</div>
        </>
    );
}

export default Price;