import React, { Component } from 'react'
import apartment from '../assets/apartment_background.png'

export default class Home extends Component {
    render() {
        return (
            <>
                <div id="home">
                    <img src={apartment} alt="apartment street view" />
                </div>
            </>
        )
    }
}