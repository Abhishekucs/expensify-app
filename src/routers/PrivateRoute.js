import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(Props) => (
        isAuthenticated ?
        ( <div>
            <Header />
            <Component {...Props}/>
          </div> )
        :
        ( <Redirect to="/" />)
    )}
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authReducer.uid
})
export default connect(mapStateToProps)(PrivateRoute)