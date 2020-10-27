import React, { Component } from 'react'

export default class ApartmentShow extends Component {
    render() {
        console.log(this.props.apartment)
        const { apartment } = this.props
        return (
            <>
                <h3>Apartment show</h3>
                <p>{apartment.street}</p>
                <p>{apartment.city}</p>
                <p>{apartment.state}</p>
                <p>{apartment.manager}</p>
                <p>{apartment.email}</p>
                <p>{apartment.price}</p>
                <p>{apartment.bedrooms}</p>
                <p>{apartment.bathrooms}</p>
                <p>{apartment.pets}</p>
            </>
        )
    }
}