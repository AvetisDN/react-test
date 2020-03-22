import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Pagination from '../layout/Pagination';
import axios from 'axios';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            page: this.props.match.params.page || 1,
            postsPerPage: 10,
            totalPages: 0
         };
        //  this.onPageChange = this.onPageChange.bind(this)
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.page !== this.props.match.params.page) {
            this.fetchPosts()
        }
    }
    componentDidMount() {
        this.fetchPosts()
    }
    fetchPosts(){

        this.setState({
            page:this.props.match.params.page
        })

        let postsAll = [];
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (response)=>{
                postsAll = response.data;
                this.paginator(postsAll)
            } )
            .catch( (error)=>{

            } )
    }
    paginator(arr) {
        arr.reverse();
        let newArr = arr.slice();
        this.setState({
            posts: newArr.splice( (this.state.page - 1)*this.state.postsPerPage, this.state.postsPerPage),
            totalPages: Math.ceil(arr.length/this.state.postsPerPage)
        })
    }
    // onPageChange(num) {
    //     this.setState({
    //         page: num
    //     })
    // }
    render() {
        return (
            <div>
                {this.state.posts.map( (post, index) => {
                    return(
                        <div className="py-3 border-bottom" key={index}>
                            <NavLink to={`/posts/${post.id}`}>
                                {post.title}
                            </NavLink>
                        </div>
                    )
                } )}
                {this.state.posts.length>0 &&
                <Pagination total={this.state.totalPages} current={this.state.page} urlBase='/posts/' />
                }
                
            </div>
        );
    }
}

export default Posts;