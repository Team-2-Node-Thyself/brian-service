import React from 'react';
import style from 'styled-components';

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
}
`;

var QuantityPicker = (props) => {
    debugger;
    let currStock = [];
    for(let i = 1; i < props.quantity; i++){
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