import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            product: []
        }
    }
    componentDidMount(){
        // pressuming that we are only loading one page for this app
        // load the first product off this app.
        axios.get('/api/product/1')
        .then((response) => {
            this.setState({
                product: response.data
            });
        }).catch(function(error) {
            console.log(`Error loading data from database: ${error}`);
        })
    }

    render() {
        return (
            <>React App is working. Please continue your work.</>
        )
    }
}

export default App;