import React from 'react';
import style from 'styled-components';

const PickUpText = style.div`
    flex-basis: 50%
`;

function PickUp(props) {
 return (
     <>
    <PickUpText>this is the pick up form</PickUpText>
    </>
 );
};

export default PickUp;