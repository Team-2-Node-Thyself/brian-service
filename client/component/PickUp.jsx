import React from 'react';
import styled from 'styled-components';

const PickUpTextArea = styled.div`
    flex-basis: 50%;
    padding-right 4px !important;
`;

const PUTitle = styled.span`
    color: rgb(0, 102, 1) !important;
    font-weight: bold !important;
    padding-left: 5px;
`;

const PULocation = styled.button`
    text-align: left;
    font-weight: bold !important;
    position: relative;
    text-decoration: underline;
    background-color: transparent;
    border: none;
    font: inherit;
    &:focus{
        outline: 1px dashed black;
    }
`;

const PUEdit = styled.button`
    text-decoration: underline !important;
    font-size: 12px !important;
    font: inherit;
    border: none;
    background-color: transparent;

    &:focus{
        outline: 1px dashed black;
    }
`;

const PUReady = styled.div`
    font-size: 14px !important;
`;

const PUAisle = styled.div`
    margin-top: 4px !important;
    font-size: 12px !important;
`;

function PickUp() {
 return (
     <>
    <PickUpTextArea>
        <PUTitle>Pick up today </PUTitle><span>at</span>
        <PULocation>New United States Mars</PULocation>
        <PUEdit>Edit store</PUEdit>
        <PUReady>Ready within 2 hours for pickup inside the store.</PUReady>
        <PUAisle>Aisle C47</PUAisle>
    </PickUpTextArea>
    </>
 );
};

export default PickUp;