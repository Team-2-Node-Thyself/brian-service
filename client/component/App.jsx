import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Price from './Price.jsx';

const WidgetArea = styled.div`
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
            <WidgetArea>
                {Object.keys(this.state.product).length > 0 &&
                    <Price product={this.state.product}/> }
                {Object.keys(this.state.product).length === 0 &&
                    <div>Something is wrong. Unless you paused as the page is rendering, this should never show up.</div>
                }
            </WidgetArea>
                {/* <WidgetArea>This is another widget area</WidgetArea>
                <WidgetArea>This is the last widget area</WidgetArea> */}
            </>
        )
    }
}

export default App;