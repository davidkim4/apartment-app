import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import apartment1 from '../assets/placeholderaptimg.jpeg'

export default class ApartmentIndex extends Component {
    render() {
        return (
            <>
                <h3 class="title">Apartment Index</h3>
                <div id="index-body">
                    {this.props.apartments.map((apartment, index) => {
                        return (
                            <div key={index} className="index-card">
                                <img id="placeholderimg" src={apartment1} alt="apartment street view" />
                                <h3>{apartment.street}</h3>
                                <h3>{apartment.city}</h3>
                                <h3>{apartment.state}</h3>
                                <br />
                                <Link to={`/apartmentshow/${apartment.id}`} className="button">More Info
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}