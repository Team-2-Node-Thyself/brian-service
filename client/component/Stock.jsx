import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QuantityPicker from './QuantityPicker.jsx';
import ColorOpt from './ColorOpt.jsx';
import InsuranceOption from './InsuranceOption.jsx';

const StockArea = styled.div`
    
`;

class Stock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // Will keep track of things here. Have not decide what
            // Most likely the different color options available after we do an axios call to server for colors options
            colors: [],
            showQuantity: false,
        }
    }

    componentDidMount() {
        let {id, color} = this.props.product;
        axios.get(`http://localhost:8003/api/product/${id}/${color}`)
        .then((response) => {
            this.setState({
                colors: response.data
            });
        }).catch((err) => {
            console.log(`There was an error loading data from the data base: ${err}`);
        })
    }

    render() {
        return (<>
            <QuantityPicker quantity={this.props.product.stock} />
            <ColorOpt currColor={this.props.product.color} otherColors={this.state.colors}/>
            <InsuranceOption />
        </>);
    }
}


export default Stock;