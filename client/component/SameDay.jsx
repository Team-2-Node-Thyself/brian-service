import React from 'react';
import styled from 'styled-components';

const SDTAOne = styled.div`
    padding-right 4px;
`;

const SDTitle = styled.span`
    grid-area: mes;
    font-weight: bold;
`;

const SDLocation = styled.span`
    grid-area: mes;
    font-weight: bold;
`;

const SDEdit = styled.button`
    grid-area: mes;
    text-decoration: underline;
    font-size: 12px;
    font-family: inherit;
    border: none;
    background-color: transparent;

    &:focus{
        outline: 1px dashed black;
    }
`;

const SDReady = styled.div`
    grid-area: avail;
    color: rgb(102, 102, 102);
    font-size: 14px;
    padding: 3px;
`;

const SDTATwo = styled.div`
    grid-column: 1/span 2;
    grid-row: 2/span 3;
`;
function SameDay() {
 return (
     <>
    <SDTAOne>
        <SDTitle>Same Day Delivery </SDTitle><span>to</span>
        <SDLocation> 12345</SDLocation>
        <div><SDEdit>Edit zip code</SDEdit></div>
    </SDTAOne>
    <SDTATwo>
        <SDReady>Not eligible for Same Day Delivery to this address</SDReady>
    </SDTATwo>
    </>
 );
};

export default SameDay;