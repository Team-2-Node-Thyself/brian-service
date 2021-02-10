import React from 'react';
import style from 'styled-components';

const Variations = style.div`
    margin: 15px 0px;
`;

const ColorVar = style.div`
display: flex;
margin-top: 10px;
flex: 0 1 auto;
flex-flow: row wrap;
`;

const ColorWrapper = style.div`
    min-width: 45px;
    margin: 0px 2px 4px;
`;

const ColorButton = style.button`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    border-width: 2px;
    overflow: visible;

    &:active{
        color: rgb(255, 255, 255);
        background-color: rgb(51, 51, 51);
        border-color: rgb(51, 51, 51);
    }
`;

const ColorBorders = style(ColorButton)`
    border-radius: 3px;
    padding: 2px;
    background: white;
    border: ${props => props.selected ? '2px solid rgb(0, 131, 0)' : '2px solid transparent'};
    &:hover{
        border: 2px solid rgb(0, 131, 0);
    };
    &:focus{
        color: rgb(51, 51, 51);
        outline: rgb(136, 136, 136) dashed 1px;
        outline-offset: 2px;
        text-decoration: underline;
    };
`;
const ColorSquare = style.div`
    height: 38px;
    width: 38px;
    background: ${props => props.color};
    padding: 2px;
    box-shadow: none;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid gray;
`;

const Title = style.div`
    font-size: 19px;
    font-weight: bold;
    text-align: left;
`;

const CurrColor = style.span`
    font-weight: normal;
`;

const OutOfStock = style.div`
    display: ${props => props.stock > 0 ? 'none' : 'block'};
    width: 40px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 2;
    font-size: 10px;
    line-height: 1;
    padding: 4px;

    &:active{
        color: white;
    }
`;

var ColorOpt = (props) => {
  let currColor = props.currColor.toUpperCase() + props.currColor.slice(1);
  return (
    <Variations>
      <Title>color: <CurrColor>{currColor}</CurrColor></Title>
      <ColorVar>

        <ColorWrapper><ColorBorders selected={true}><ColorSquare color={props.currColor} key={props.currColor + 1}/></ColorBorders></ColorWrapper>
        {
          props.otherColors.map((colors, i) => {
            return <ColorWrapper><ColorBorders><ColorSquare color={colors.color} key={colors.color + i}><OutOfStock stock={colors.stock}>Out of Stock</OutOfStock></ColorSquare></ColorBorders></ColorWrapper>;
          })
        }
      </ColorVar>
    </Variations>
  );
};

export default ColorOpt;