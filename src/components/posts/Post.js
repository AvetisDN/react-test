import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: {},
            user: {},
            id: this.props.match.params.id,
            error: true
         };
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('Prev: ' + prevProps.match.params.id + ' | Current: ' + this.props.match.params.id)
        if(prevProps.match.params.id !== this.props.match.params.id) this.fetchPost()
    }

    componentDidMount() {
        this.fetchPost()
    }

    fetchPost() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then( (response) => {
                this.setState({
                    post: response.data,
                    error: false
                })
                this.fetchAuthor(this.state.post.userId)
            } )
            .catch( (error) => {
                //console.error(error);
            } )
    }
    fetchAuthor(userId) {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then( (response) => {
                this.setState({
                    user: response.data
                })
            } )
            .catch( (error) => {
                //console.error(error);
            } )
    }

    render() {
        return (
            <article className='post'>
                {this.state.error && 
                    
                    <div className="alert alert-danger" role="alert">
                        Nothing found
                    </div>

                }
                {!this.state.error && 
                    <div>
                        <h2>
                            {this.props.match.params.id} - {this.state.post.title}
                        </h2>
                        <h5>
                            <NavLink to={`/users/${this.state.post.userId}`}>
                                {this.state.user.name}
                            </NavLink>
                        </h5>
                        <p>
                            {this.state.post.body}
                        </p>
                    </div>
                }
            </article>
        );
    }
}

export default Post;