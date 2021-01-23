import React from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import Price from './Price.jsx';
import Stock from './Stock.jsx';
import CheckoutForm from './CheckoutForm.jsx';
import PickUp from './PickUp.jsx';
import SameDay from './SameDay.jsx';
import Delivery from './Delivery.jsx';
import PaymentPlans from './PaymentPlans.jsx';

const GlobalStyle = createGlobalStyle`
    div{
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: rgb(51, 51, 51);
    },
`;

const WidgetArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 15%);
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
    grid-row: 1/span 1;
`;

const DisStock = styled.div`
    grid-column: 1;
    grid-row: 4;
`;

const MarginTiny = styled.div`
    grid-column: 1;
    grid-row: 4;
    margin-top: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
`;
const CreditApp = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
    border-width: 1px 0 1px 0;
    border-color: black;
    border-style: solid;
    grid-column: 1;
    grid-row: 2/ span 2;
    display: flex;
    flex-direction: column;
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
    grid-row-end: 7;
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
            <>
            <GlobalStyle/>
                <WidgetArea>
                    {Object.keys(this.state.product).length === 0 &&
                        <BrokenP>Something is wrong. Unless you paused as the page is rendering, this should never show up.</BrokenP>
                    }
                    {Object.keys(this.state.product).length > 0 &&
                    <>
                        <DisPri>
                            <Price product={this.state.product}/> 
                        </DisPri>
                        <CreditApp><PaymentPlans price={this.state.product.price}/></CreditApp>
                        <DisStock>
                            <Stock product={this.state.product}/>
                        </DisStock>
                        <LocalStock><CheckoutForm buttonText='Pick it up'><PickUp /></CheckoutForm></LocalStock>
                        <SameDayDeliver><CheckoutForm buttonText='Deliver it'><SameDay /></CheckoutForm></SameDayDeliver>
                        <OnlineDeliver><CheckoutForm buttonText='Ship it'><Delivery price={this.state.product.price} discount={this.state.product.discount}/></CheckoutForm></OnlineDeliver>
                    </>}
                </WidgetArea>
            </>
        )
    }
}

export default App;