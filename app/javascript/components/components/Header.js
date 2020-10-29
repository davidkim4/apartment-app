import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

export default class Header extends Component {
    render() {
        const {
            logged_in,
            sign_in_route,
            sign_up_route,
            sign_out_route
        } = this.props
        return (
            <React.Fragment>
                <div id="header">
                    <h1>All Apartment</h1>
                </div>
            </React.Fragment>
        )
    }
}