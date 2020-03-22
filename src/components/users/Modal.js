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

                </div>
                <div className="my-modal__body">

                </div>
                <div className="my-modal__footer">
                    <button className="btn btn-secondary">Close</button>
                </div>
            </div>
        );
    }
}

export default Modal;