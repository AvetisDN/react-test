import React, {Component} from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={`my-modal ${this.props.show ? 'show' : ''}`}>
                <div className="my-modal__header">
                    <h5>{this.props.user.username} &lt;{this.props.user.email}&gt;</h5>
                </div>
                <div className="my-modal__body">
                    <p>
                        Real Name: {this.props.user.name}
                    </p>
                    <p>
                        Phone: {this.props.user.phone}
                    </p>
                    <p>
                        Company: {this.props.user.company && this.props.user.company.name}
                    </p>
                </div>
                <div className="my-modal__footer">
                    <button className="modal-close btn btn-secondary"
                            onClick={() => {this.props.showModal(this.props.user.id)} }>Close</button>
                </div>
            </div>
        );
    }
}

export default Modal;