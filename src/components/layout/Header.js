import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fluid: false,
            title: 'title'
        }
        this.changeFluidState = this.changeFluidState.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
    }

    getHeaderClass() {
        return this.state.fluid ? 'container-fluid' : 'container'
    }

    changeFluidState() {
        this.setState({
            fluid: !this.state.fluid
        })
    }

    changeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    componentDidMount() {
    }

    render() {
        document.title = this.state.title
        return (
            <header>
                <div className={`${this.getHeaderClass()} bg-primary text-white py-5 d-flex justify-content-between`}>
                    <h2>
                        {this.state.title}
                    </h2>
                    <div className={'form-group'}>
                        <label>
                            <input className={'form-control'} type="checkbox" onChange={this.changeFluidState} />
                            Fluid
                        </label>
                    </div>
                    <div className={'form-group'}>
                        <label>
                            <input className={'form-control'} type="text" onChange={this.changeTitle} value={this.state.title} />
                            Title
                        </label>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header