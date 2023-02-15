import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


function LogoutPage(props) {
    const dispatch = useDispatch();

    function onLogout() {
        // dispatch(logout(props.history));
        // window.location.reload();
    }
    return (
        <>

            <Link to={'#'} title="READ MORE" className="site-button" onClick={onLogout}>
                <i className="fa fa-lock"></i> Logout
            </Link>
        </>
    )
}

export default withRouter(LogoutPage);