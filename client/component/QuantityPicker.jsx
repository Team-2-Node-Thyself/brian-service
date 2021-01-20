import React from 'react';
import style, { css } from 'styled-components';

let Quantity = style.div`
    display: flex;
    justify-content: start;
    font-weight: bold;
    font-size: 16px !important;
    transform: translate3d(0px, -12px, 0px)
`;
let Picker = style.select`
display: flex;
justify-content: start;
position: relative;
font-weight: normal;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
border-width: 1px;
border-style: solid;
white-space: nowrap;
user-select: none;
flex-basis: 100%;
width: 100%;
padding: 12px 16px;
font-size: 16px;
line-height: 1.42857;
border-radius: 4px;
color: rgb(51, 51, 51);
background-color: rgb(255, 255, 255);
border-color: rgb(136, 136, 136);
`;

var QuantityPicker = (props) => {
    let currStock = [<option value="1">1</option>];
    // After looking at some of the other item pages on target, it seems like I pick more than 4 items if there are more items in stock.
    // I am not sure if Target wants to artifically limit how many items a customer can purchase,
    // or if it truly reflects their current availablitiy of the stock they have
    // (Or could be both).
    // So I decided to artifically limit the quantity amount to 10 if there are more than 10 of the items in stock
    // If there are less then 10, I will only display that much.
    //
    // In cases where there are no stock available. It looks like I can still interact with the quantity selector to at least have 1,
    // but the local check out button is removed and a out of stock message is rendered
    // (Example: Nintendo Switch on Target.com [at least in my area])
    // Altering values to reflect that:
    // Will always have 1 item selectable in quantity.
    for(let i = 2; i < props.quantity; i++){
        if(i > 10){
            break;
        }
        currStock.push(<option value={i}>{i}</option>)
    }
    return (
        <>
        <Quantity>Quantity</Quantity>
        <Picker>
            {currStock}
        </Picker>
        </>
    );
};

export default QuantityPicker;