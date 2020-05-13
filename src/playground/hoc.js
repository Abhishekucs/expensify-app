import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please Authenticate</p>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is information" />, document.getElementById('app'))