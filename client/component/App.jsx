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
    }
`;

const WidgetArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 100%);
    grid-template-rows: 60px 15% 15% 60px 15% 35px 15%;
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

const CreditApp = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
    border-width: 1px 0 1px 0;
    border-color: rgb(214, 214, 214);
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
`;

const SameDayDeliver = styled.div`
    grid-column: 2;
    grid-row-start: 3;
    grid-row-end: 4;
`;
const OnlineDeliver = styled.div`
    margin: 5px 0px;
    grid-column: 2;
    grid-row-start: 5;
    grid-row-end: 7;
`;

const RegWrapper = styled.div`
    grid-column: 2;
    grid-row-start: 7;
    display: block;
    margin: 0px 4px;
`;

const RegButton = styled.button`
    height: 34px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(136, 136, 136);
    border-radius: 4px;
    font-size: 12px;
    
    &:hover{
        color: rgb(51, 51, 51);
        background-color: rgb(244, 244, 244);
        border-color: rgb(51, 51, 51);
        text-decoration: none;
    };
    
    &:active{
        color: rgb(255, 255, 255);
        background-color: rgb(51, 51, 51);
        border-color: rgb(51, 51, 51);
    };

    &:focus{
        color: rgb(51, 51, 51);
        outline: rgb(136, 136, 136) dashed 1px;
        outline-offset: 2px;
        text-decoration: underline;
    };
    
    &:active:focus{
        outline: none;
        color: rgb(255, 255, 255);
    };

    `;

const Symb = styled.span`
    height: 10px;
    width: 10px;
    background: white;
    padding: 2px;
    box-shadow: none;
    border-radius: 100%;
    border: 2px solid rgb(204,0,0);
`;

const RegTextWrapper = styled.span`
    padding-left: 12px;
`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {}
    };
  }
  componentDidMount() {
    // need to double check what window.location.pathname actually is
    // when looking at the root on chromo devtool, it is just '/' and not 'localhost:8000/'
    let productId = window.location.pathname;

    if (productId = '/') {
      productId = '/products/1';
    }

    // pressuming that we are only loading one page for this app
    // load the first product for this app.
    axios.get(`http://localhost:8003/api${productId}`)
      .then((response) => {
        console.log(response);
        this.setState({
          product: response.data
        });
        console.log('SSSSTTTTTAAATTTTEEEE', this.state.product);
      })
      .catch(function(error) {
        console.log(`Error loading data from database: ${error}`);
      });
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
                      <RegWrapper><RegButton><Symb></Symb><RegTextWrapper>Add to registry</RegTextWrapper></RegButton></RegWrapper>
                    </>}
        </WidgetArea>
      </>
    );
  }
}

export default App;