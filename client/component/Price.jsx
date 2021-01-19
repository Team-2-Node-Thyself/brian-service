import React from 'react';
import style from 'styled-components';

const PriceWidget = style.div`
    grid-column: 1;
    grid-row: 1;
    border: 5px solid lime;
`;
let Price = (props) => {
    let {price, discount} = props.product;
    let disPrice, disAmount;
    if(price !== undefined){
        price = price.toFixed(2);
    }
    if(discount !== undefined && discount !== 0){
        // should have seeded data with decimal values instead of whole number %
        // would not have to deal with (100-discount/100) to get the price off.
        // could simply do price * discount instead for disAmount
        disAmount = discount/100*price;
        disPrice = (price-disAmount).toFixed(2);
    }
    return (
        <PriceWidget>
            <div>{discount ? `$${(price-disAmount).toFixed(2)} Sale` : price}</div>
            <div>reg ${price} {discount ? `Save $${disAmount} (${discount}% Off)` : 'No Discount. Currently a placeholder'}</div>
        </PriceWidget>
    );
}

export default Price;