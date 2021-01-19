
import React, { Component } from 'react';
class ErrorBoundary extends Component 
{
    constructor ( props )
    {
        super( props )
        this.state = {
            hasError: false
        }
    }
    componentDidCatch ( err, info )
    {
        this.setState( { hasError: true } );
    }

    render ()
    {
        const { hasError } = this.state;
        if ( hasError )
        {
            return <h1>Oops something went Wrong</h1>
        }
        else
        {
            return this.props.children;
        }
    }
}
export default ErrorBoundary;