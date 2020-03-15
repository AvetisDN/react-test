import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <h2>
                About Page
            </h2>
        )
    }
}

export default About