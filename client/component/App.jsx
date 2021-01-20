import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Price from './Price.jsx';
import Stock from './Stock.jsx';

const WidgetArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2 1fr);
    grid-template-rows: repeat (8 1fr);
    border: 5px solid magenta;
    width: 50%;
    grid-gap: 20px;
`;

const BrokenP = styled.div`
    grid-column: 1;
    grid-row: 1;
`;

const DisPri = styled.div`
    grid-column: 1;
    grid-row: 1;
`;

const DisStock = styled.div`
    grid-column: 1;
    grid-row: 5;
`;

const MarginTiny = styled.div`
    grid-column: 1;
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    border-bottom: 1px solid black;
`;
const CreditApp = styled.div`
    grid-column: 1;
    grid-row: 3;
`;
const LocalStock = styled.div`
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    background: lightgray;
`;

const SameDayDeliver = styled.div`
    grid-column: 2;
    grid-row-start: 3;
    grid-row-end: 5;
    background: khaki;
`;
const OnlineDeliver = styled.div`
    grid-column: 2;
    grid-row-start: 5;
    grid-row-end: 8;
    background: pink;
`;

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            product: {}
        }
    }
    componentDidMount(){
        // pressuming that we are only loading one page for this app
        // load the first product for this app.
        axios.get('/api/product/1')
        .then((response) => {
            this.setState({
                product: response.data[0]
            });
        }).catch(function(error) {
            console.log(`Error loading data from database: ${error}`);
        })
    }

    render() {
        return (
            <WidgetArea>
                {Object.keys(this.state.product).length === 0 &&
                    <BrokenP>Something is wrong. Unless you paused as the page is rendering, this should never show up.</BrokenP>
                }
                {Object.keys(this.state.product).length > 0 &&
                <>
                    <DisPri>
                        <Price product={this.state.product}/> 
                    </DisPri>
                    <MarginTiny />
                    <CreditApp>Here will be some credit card application stuff</CreditApp>
                    <MarginTiny />
                    <DisStock>
                        <Stock product={this.state.product}/>
                    </DisStock>
                    <LocalStock>This is where the local stock information will go</LocalStock>
                    <SameDayDeliver>This is where the same day deliver button will go</SameDayDeliver>
                    <OnlineDeliver>This is where the online Deliver button will go</OnlineDeliver>
                </>}
            </WidgetArea>
        )
    }
}

export default App;