import React from 'react';
import styled from 'styled-components';

const PUTAOne = styled.div`
    padding-right 4px;
`;

const PUTitle = styled.span`
    grid-area: mes;
    color: rgb(0, 102, 1);
    font-weight: bold;
`;

const PULocation = styled.button`
    grid-area: mes;
    cursor: pointer;
    text-align: left;
    font-weight: bold;
    position: relative;
    text-decoration: underline;
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-family: inherit;
    &:focus{
        outline: 1px dashed black;
    }
`;

const PUEdit = styled.button`
    grid-area: mes;
    cursor: pointer;
    text-decoration: underline;
    font-size: 12px;
    font-family: inherit;
    border: none;
    background-color: transparent;

    &:focus{
        outline: 1px dashed black;
    }
`;

const PUReady = styled.div`
    grid-area: avail;
    font-size: 14px;
    padding: 3px;
`;

const PUAisle = styled.div`
    grid-area: misc;
    padding-top: 4px;
    margin-top: 4px;
    font-size: 12px;
`;

const PUTATwo = styled.div`
    grid-column: 1/span 2;
    grid-row: 2;
`;
function PickUp() {
 return (
     <>
    <PUTAOne>
        <PUTitle>Pick up today </PUTitle><span>at</span>
        <PULocation>Sesame Street Mars</PULocation>
        <PUEdit>Edit store</PUEdit>
    </PUTAOne>
    <PUTATwo>
        <PUReady>Ready within 2 hours for pickup inside the store.</PUReady>
        <PUAisle>Aisle C47</PUAisle>
    </PUTATwo>
    </>
 );
};

export default PickUp;