import React from 'react';
import styled, {css} from 'styled-components';

const PriceWidget = styled.div`
    grid-column: 1;
    grid-row: 1;
`;

const PriceTitle = styled.div`
    font-size: 29px;
    font-weight: bold;

    ${props => props.discount > 0 && css`
        color: rgb(204, 0, 0);
    `};
`;

const SalesTag = styled.span`
    font-size: 23px;
    font-weight: normal;
    margin-left: 4px;
`;

const ProductSavings = styled.div`
    display: ${props => props.discount ? 'block' : 'none'};
    color: rgb(102, 102, 102);
    font-size: 12px;
    margin: 12px 0px;
`;
let Price = (props) => {
  let {price, discount} = props.product;
  let disPrice; let disAmount;
  if (price !== undefined) {
    price = price.toFixed(2);
  }
  if (discount !== undefined && discount !== 0) {
    disAmount = discount / 100 * price;
    disPrice = (price - disAmount).toFixed(2);
  }
  return (
    <PriceWidget>
      <PriceTitle discount={discount}>{discount ? `$${(price - disAmount).toFixed(2)}` : `$${price}`}<SalesTag discount={discount}>Sale</SalesTag></PriceTitle>
      <ProductSavings discount={discount}>reg ${price} {discount ? `Save $${disAmount.toFixed(2)} (${discount}% Off)` : 'No Discount. Currently a placeholder'}</ProductSavings>
    </PriceWidget>
  );
};

export default Price;