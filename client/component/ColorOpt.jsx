import React from 'react';
import style from 'styled-components';

const Variations = style.div`
`;

const ColorVar = style.div`
display: flex;
justify-content: space-evenly;
`;
const ColorSquare = style.span`
height: 40px;
width: 40px;
background: ${props => props.color};
`;

var ColorOpt = (props) => {
    let currColor = props.currColor[0].toUpperCase()+props.currColor.slice(1);
    return (
        <Variations>
        <div>Color: {currColor}</div>
        <ColorVar>
            <ColorSquare color={props.currColor} key={props.currColor+1}/>
            {
                props.otherColors.map((colors, i) => {
                    return <ColorSquare color={colors.color} key={colors.color+i}/>
                })
            }
        </ColorVar>
        </Variations>
    );
};

export default ColorOpt;