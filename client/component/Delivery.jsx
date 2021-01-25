import React from 'react';
import styled from 'styled-components';

const DelTAOne = styled.div`
    padding-right 4px;
`;

const DelTitle = styled.span`
    grid-area: mes;
    color: rgb(0, 102, 1);
    font-weight: bold;
`;

const DelLocation = styled.span`
    grid-area: mes;
    font-weight: bold;
`;

const DelEdit = styled.button`
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

const DelReady = styled.div`
    grid-area: avail;
    font-size: 14px;
    padding: 3px;
`;

const DelDates = styled.span`
    color: rgb(0, 102, 1);
`;

const DelMisc = styled.div`
    grid-area: misc;
    font-size: 14px;
    color:rgb(102, 102, 102);
    padding-top: 4px;
    margin-top: 4px;
`;
const DelTATwo = styled.div`
    grid-column: 1/span 2;
    grid-row: 2/span 3;
`;
function Delivery(props) {
    let {price, discount} = props;
    let currPrice = price-(discount/100*price);
 return (
     <>
    <DelTAOne>
        <DelTitle>Deliver </DelTitle><span>to</span>
        <DelLocation> 12345</DelLocation>
        <DelEdit>Edit zip code</DelEdit>
    </DelTAOne>
    <DelTATwo>
        <DelReady><DelDates>Get it by Tue, Feb 30</DelDates> with free standard shipping {currPrice < 35 && `on $35 orders`}</DelReady>
        <DelMisc>This delivery date includes extra time for the weekend.</DelMisc>
    </DelTATwo>
    </>
 );
};

export default Delivery;