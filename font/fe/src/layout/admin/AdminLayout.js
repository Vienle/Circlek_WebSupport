import React from 'react'
import PropTypes from 'prop-types'
import DashBoard from './../../components/dashboard/DashBoard'
import { Route } from "react-router-dom";

function AdminLayout(props) {
    const { component : YourComponent, name, path, exact } = props;
    console.log('layout',props);
    return (
        <Route
            path={path}
            exact={exact}
            render={routeProp => {
                return(
                    <DashBoard>
                        <YourComponent {...routeProp}/>
                    </DashBoard>
                )
            }}
            />
        
    )

}

AdminLayout.propTypes = {

}

export default AdminLayout

