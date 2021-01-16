import React from 'react';
import axios from 'axios';
import Price from './Price.jsx';

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
            debugger;
            this.setState({
                product: response.data[0]
            });
        }).catch(function(error) {
            console.log(`Error loading data from database: ${error}`);
        })
    }

    render() {
        debugger;
        return (
            <>
            {Object.keys(this.state.product).length > 0 &&
                <Price product={this.state.product}/> }
            {Object.keys(this.state.product).length === 0 &&
                <div>Something is wrong. Unless you paused as the page is rendering, this should never show up.</div>
            }
            </>
        )
    }
}

export default App;