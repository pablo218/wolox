import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const Private = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (

        <Route {...rest}
            component={
                (props) => (
                    (isAuth ? <Component {...props} />
                        : <Redirect to="/register" />)
                )
            }

        />
    )
}

export default Private
