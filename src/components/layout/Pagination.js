import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pages: []
        };
    }
    componentDidMount() {
        this.getPageNumbers();
    }
    getPageNumbers() {
        let pagesArr = [];
        for(let i = 0; i < this.props.total; i++) {
            pagesArr.push(i+1)
        }
        this.setState({
            pages: pagesArr
        })
    }
    render() {
        return (
            <nav aria-label="Page navigation example" className='mt-3'>
                <ul className="pagination">
                    <li className="page-item">
                        <NavLink className="page-link" to="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </NavLink>
                    </li>
                    {this.state.pages.map( (page, index) => { 
                        return(
                            <li className={`page-item ${page == this.props.current ? 'active' : ''}`} key={index}>
                                <NavLink className="page-link" to={`${this.props.urlBase}${page}`} aria-label="Previous">
                                    {page}
                                </NavLink>
                            </li>
                        ) 
                    })}
                    <li>
                        <NavLink className="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;