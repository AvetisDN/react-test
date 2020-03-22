import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Modal from './Modal';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [],
            isModalShow: false
        };
        this.showModal = this.showModal.bind(this)
    }

    showModal() {
        this.setState({
            isModalShow: !this.state.isModalShow
        })
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({
                    users: response.data
                })
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
                <Modal show={this.state.isModalShow} />
            </div>
        );
    }
}

export default Users;