import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <tr>
                <td>
                    {this.props.user.id}
                </td>
                <td>
                    {this.props.user.name}
                </td>
                <td>
                    {this.props.user.username}
                </td>
                <td>
                    {this.props.user.email}
                </td>
                <td>
                    <button className="btn btn-sm mr-2 btn-info" onClick={this.props.showModal}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                    </button>
                    <button className="btn btn-sm btn-danger">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </td>
            </tr>

        );
    }
}

export default TableRow;