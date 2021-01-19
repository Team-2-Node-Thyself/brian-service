import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Stock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // Will keep track of things here. Have not decide what
            // Most likely the different color options available after we do an axios call to server for colors options
        }
    }

    render() {
        return <div>This is the Stock and Color component. It is being constructed right now.</div>;
    }
}


export default Stock;