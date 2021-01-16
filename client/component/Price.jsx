import React from 'react';

let Price = (props) => {
    let {price, discount} = props.product;
    let disPrice;
    if(price !== undefined){
        price = price.toFixed(2);
    }
    if(discount !== undefined && discount !== 0){
        disPrice = (price*((100-discount)/100)).toFixed(2);
    }
    return (
        <>
            <div>Price: {discount ? `$${disPrice} Sale` : price}</div>
            <div>Discount: {discount}</div>
        </>
    );
}

export default Price;