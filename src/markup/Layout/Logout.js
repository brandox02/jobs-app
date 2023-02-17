import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth } from '../../useAuth';

function LogoutPage() {
    const { logout } = useAuth();
    return (
        <Link to={'#'} title="READ MORE" className="site-button" onClick={logout}>
            <i className="fa fa-lock"></i> Logout
        </Link>
    )
}

export default withRouter(LogoutPage);