import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            product: [{id: 1}]
        }
    }
    componentDidMount(){
        // Do something after we mount the app
    }

    render() {
        return (
            <>React App is working. Please continue your work.</>
        )
    }
}

export default App;