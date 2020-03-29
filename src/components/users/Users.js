import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Modal from './Modal';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [],
            user: {},
            isModalShow: false
        };
        this.showModal = this.showModal.bind(this)
    }

    showModal(id) {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then((response) => {
                this.setState({
                    user: response.data,
                    isModalShow: !this.state.isModalShow
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({
                    users: response.data
                })
                // this.props.disablePreloader()
            })
            .catch((error) => {
                console.error(error);                
            })
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                {
                    this.state.users.length>0 &&
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Username
                                    </th>
                                    <th>
                                        E-Mail
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map( (user, index) => {
                                        return (
                                            <TableRow user={user} showModal={this.showModal} key={index} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                }
                <Modal show={this.state.isModalShow} showModal={this.showModal} user={this.state.user} />
            </div>
        );
    }
}

export default Users;