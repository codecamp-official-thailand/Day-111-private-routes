import React, { Component } from 'react'
import configsRoute from '../../configs/roles'
import { Switch, Route, Redirect } from 'react-router-dom';

export default class PrivateRoutes extends Component {
    state = {
        allowedRoutes: configsRoute[this.props.role].allowedRoutes,
        redirectRoute: configsRoute[this.props.role].redirect,
    }

    render() {
        return (
            <div>
                <Switch>
                    {this.state.allowedRoutes.map(el => {
                        return (
                            <Route
                                exact path={el.url}
                                component={el.component}
                                key={el.url}
                            />
                        )
                    })}
                    <Redirect to={this.state.redirectRoute} />
                </Switch>
            </div>
        )
    }
}
