import React, { Component } from 'react'


class ErrorBoundarie extends Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }


    render() {
        if (this.state.hasError) {

            return (
                <div className="errorBoundarie">
                    <img className="errorBoundarie--image" src="./assets/error.png" alt="error" />
                    <h1 className="errorBoundarie--text">Los sentimos</h1>
                    <h1 className="errorBoundarie--text">Hubo un error</h1>
                </div>
            )

        }

        return <>{this.props.children}</>

    }

}

export default ErrorBoundarie