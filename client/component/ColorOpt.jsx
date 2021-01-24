import React from 'react';
import style, {css} from 'styled-components';

const Variations = style.div`
    margin: 15px 0px;
`;

const ColorVar = style.div`
display: flex;
margin-top: 10px;
justify-content: space-evenly;
`;

const ColorButton = style.button`
    width: 52px;
    height: 52px;
    border-radius: 3px;
    border-width: 2px;
    overflow: visible;


`;

const ColorBorders = style(ColorButton)`
    border-radius: 3px;
    padding: 2px;
    background: white;
    border: ${props => props.selected ? '2px solid rgb(0, 131, 0)' :'2px solid transparent'};
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
height: 40px;
width: 40px;
background: ${props => props.color};
padding: 2px;
box-shadow: none;
cursor: pointer;
`;

var ColorOpt = (props) => {
    let currColor = props.currColor[0].toUpperCase()+props.currColor.slice(1);
    return (
        <Variations>
        <div>Color: {currColor}</div>
        <ColorVar>

            <ColorBorders selected={true}><ColorSquare color={props.currColor} key={props.currColor+1}/></ColorBorders>
            {
                props.otherColors.map((colors, i) => {
                    return <ColorBorders><ColorSquare color={colors.color} key={colors.color+i}/></ColorBorders>
                })
            }
        </ColorVar>
        </Variations>
    );
};

export default ColorOpt;