import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState(
            {
                hasError: true,
                errorMessage: error
            }
        );
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Whoops!</h1>
                    <p>Something went bang, sorry about that!</p>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;