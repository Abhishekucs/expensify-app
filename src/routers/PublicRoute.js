import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(Props) => (
        isAuthenticated ?
        ( 
            <Redirect to="/Dashboard" />
        )
        :
        (
            <Component {...Props}/>
        )
    )}
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authReducer.uid
})
export default connect(mapStateToProps)(PublicRoute)