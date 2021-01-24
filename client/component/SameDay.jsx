import React from 'react';
import styled from 'styled-components';

const SDTAOne = styled.div`
    padding-right 4px;
`;

const SDTitle = styled.span`
    grid-area: mes;
    color: rgb(0, 102, 1);
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
    cursor: pointer;
    &:focus{
        outline: 1px dashed black;
    }
`;

const SDReady = styled.div`
    grid-area: avail;
    display: block;
    font-size: 14px;
    padding: 3px;
`;

const SDShipInfo = styled.span`
    color: rgb(0, 102, 1);
`;

const SDMisc = styled.div`
    padding: 10px 0px;
    font-size: 12px;
`;

const SDTATwo = styled.div`
    display: block;
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
        <SDReady><SDShipInfo>Get it as soon as 7pm today</SDShipInfo> with Shipt</SDReady>
        <SDMisc>Free with membership or $9.99/order</SDMisc>
    </SDTATwo>
    </>
 );
};

export default SameDay;