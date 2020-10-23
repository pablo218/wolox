import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const Public = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (

        <Route {...rest}
            component={
                (props) => (
                    (!isAuth ? <Component {...props} />
                        : <Redirect to="/techs" />)
                )
            }

        />
    )
}

export default Public
