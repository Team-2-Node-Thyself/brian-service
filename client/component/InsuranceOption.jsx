import React from 'react';
import styled from 'styled-components';

const Insurance = styled.div`
    cursor: pointer;
    padding-left: 28px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        top: 1px;
        left: 0px;
        width: 20px;
        height: 20px;
        background-color: ${props => props.checkbox ? 'rgb(204, 0, 0)' : 'white'};
        border-width: 1px;
        border-style: solid;
        border-color: ${props => props.checkbox ? 'rgb(204, 0, 0)' :'rgb(136, 136, 136)'};
        border-radius: 3px;
        transition-timing-function: ease-out;
        transition-duration: 200ms;
        transition-property: background-color, border-color;
    }
    outline: ${props => props.checkbox && 'rgb(0, 0, 0) dashed 1px'};
    outline-offset: ${props => props.checkbox && '3px'}

`;

const Checkbox = styled.div`
    display: ${props => props.checkbox ? '' : 'none'};
    &::after{
        position: absolute;
        content: "";
        top: 5px;
        left: 8px;
        width: 5px;
        height: 10px;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        border-top: 0px;
        border-left: 0px;
        transform: rotate(33deg);
        animation: 300ms ease-in-out 0s 1 normal forwards running;
    }
`;

const PlainText = styled.div`
    display: block;
`;

const EstPrice = styled.span`
    font-size: 19px;
    font-weight: bold;
`;

const DetailPlans = styled.a`
    position: relative;
    text-decoration: underline;
    color: rgb(51, 51, 51);
    font-size: 12px;

    &:focus{
        text-decoration: none;
        outline-style: dashed;
        outline-width: 1px;
    }
    &:hover{
        outline-color: black;
    }
`;

class InsuranceOption extends React.Component {
    constructor(){
        super();
        this.state = {
            isChecked: false
        };
    }

    toggleCheck(event) {
        event.preventDefault();
        this.setState((state) => {
            return {isChecked: !state.isChecked}
        })
    }
    render(){
        return (
            <Insurance checkbox={this.state.isChecked} onClick={this.toggleCheck.bind(this)}>
                <Checkbox checkbox={this.state.isChecked}></Checkbox>
                <PlainText>Quiver 2 Year Pet Toy Protection Plan with Accidents coverage</PlainText>
                <EstPrice>$5.00 </EstPrice><span><DetailPlans href='#'>See plan details</DetailPlans></span>
            </Insurance>
    
        );
    }
};

export default InsuranceOption;