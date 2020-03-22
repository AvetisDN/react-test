import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class PostsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink exact to="/post/1">Post 1</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/post/2">Post 2</NavLink>
                </li>
            </ul>
        );
    }
}

export default PostsMenu;