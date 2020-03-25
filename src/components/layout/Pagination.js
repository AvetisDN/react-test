import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pages: []
        };

        console.log(this.props.current);
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.current !== this.props.current) {
            this.getPageNumbers()
        }
    }
    componentDidMount() {
        this.getPageNumbers();
    }
    getPageNumbers() {
        let pagesArr = [
            {
                text: '<<',
                active: false,
                disable: this.props.current*1 === 1,
                url: this.props.urlBase + '1'
            },
            {
                text: '<',
                active: false,
                disable: this.props.current*1 === 1,
                url: this.props.urlBase + (this.props.current - 1 )
            },
        ];
        let loopStart = 1;
        let loopEnd = 3;
        if(this.props.current > 1) {
            loopStart = this.props.current - 1;
            loopEnd = this.props.current*1 + 1;
        }
        if(this.props.current === this.props.total) {
            loopStart = this.props.total - 2;
            loopEnd = this.props.total;
        }
        for(let i = loopStart; i <= loopEnd; i++) {
            pagesArr.push(
                {
                    text: i,
                    active: i === this.props.current*1,
                    disable: i === this.props.current*1,
                    url: this.props.urlBase + i
                }
            )            
        }
        pagesArr.push(
            {
                text: '>',
                active: false,
                disable: this.props.current === this.props.total,
                url: this.props.urlBase + (this.props.current*1 + 1)
            },
            {
                text: '>>',
                active: false,
                disable: this.props.current === this.props.total,
                url: this.props.urlBase + this.props.total
            }
        )


        this.setState({
            pages: pagesArr
        })

    }
    render() {
        return (
            <nav className='mt-3'>
                <ul className="pagination">
                    {this.state.pages.length>0 && this.state.pages.map( (page, index) => { 
                        return(
                            <li className={`page-item ${(page.disable && !page.active) ? 'disabled' : ''} ${page.active ? 'active' : ''}`} key={index}>
                                <NavLink className="page-link" to={page.url}>
                                    {page.text}
                                </NavLink>
                            </li>
                        ) 
                    })}
                </ul>
            </nav>
        );
    }
}

export default Pagination;