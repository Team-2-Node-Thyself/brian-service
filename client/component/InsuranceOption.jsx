import React from 'react';
import styled from 'styled-components';

const Insurance = styled.label`
`;

let InsuranceOption = (props) => {
    return (
        <div>
        <form>
            <input type='checkbox' />
            <Insurance>Allstate 2 Year Headphones & Speakers Protection Plan with Accidents coverage</Insurance>
            <span>$5.00</span><span><a href='#'>See plan details</a></span>
        </form>
        </div>

    );
};

export default InsuranceOption;