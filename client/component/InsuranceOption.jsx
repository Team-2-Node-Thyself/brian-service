import React from 'react';
import styled from 'styled-components';

const Insurance = styled.label`
`;

let InsuranceOption = () => {
    return (
        <form>
            <input type='checkbox' />
            <Insurance>This is an insurance option. Please check it and gimme more money.</Insurance>
        </form>

    );
};

export default InsuranceOption;