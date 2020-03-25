import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.disablePreloader()
    }
    render() {
        return (
            <h2>
                Homepage
            </h2>
        )
    }
}

export default Home