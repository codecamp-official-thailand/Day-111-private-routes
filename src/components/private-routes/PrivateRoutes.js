import React, { Component } from 'react'
import configsRoute from '../../configs/roles'
import { Switch, Route, Redirect } from 'react-router-dom';

export default class PrivateRoutes extends Component {
    render() {
        const allowedRoutes = configsRoute[this.props.role].allowedRoutes
        const redirectRoute = configsRoute[this.props.role].redirect

        return (
            <div>
                <Switch>
                    {allowedRoutes.map(el => {
                        return (
                            <Route
                                exact path={el.url}
                                component={el.component}
                                key={el.url}
                            />
                        )
                    })}
                    <Redirect to={redirectRoute} />
                </Switch>
            </div>
        )
    }
}
