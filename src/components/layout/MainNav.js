import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: []
         };
    }
    componentDidMount() {
        this.setState({
            items: this.props.items
        })
    }
    render() {
        return (
            <div className="container-fluid bg-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
                                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                    {
                                        this.state.items.map( (item, index) => {

                                            return (
                                                <li className="nav-item" key={index}>
                                                    <NavLink exact className="nav-link" to={item.url}>
                                                        {item.title}
                                                    </NavLink>
                                                </li>
                                            )

                                        } )
                                    }
                                    </ul>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainNav;