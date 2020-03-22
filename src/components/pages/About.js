import React, {Component} from 'react';

class About extends Component {
    componentDidMount() {
        console.log(this.props.match.params)
    }
    render() {
        return (
            <h2>
                About Page {this.props.match.params.id} {this.props.match.params.page}
            </h2>
        )
    }
}

export default About