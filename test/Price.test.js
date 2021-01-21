import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Price from './client/component/Price.jsx';

/**
 * This is where I would test the Price component
 * I would check if it is displaying the price
 * I would check if it is displaying the price correctly if there is a sales/discount
 * I would check if it is not incorrectly displaying the price
 * --Make sure it does not try to display a discount price when there is no discount
 * --Make sure it does not try to display the normal price when there is a discount
 * I would check if it display the correct amount of saving if there is a sales/discount
 * I would check if the saving portion does not display if there is no sales/discount on the item
 */