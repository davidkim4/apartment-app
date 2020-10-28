import React, { Component } from 'react'

export default class ApartmentShow extends Component {
    render() {
        const { apartment } = this.props
        return (
            <>
                <div id="show-body">
                    <h3>{apartment.street} Apartment</h3>
                    <p>{apartment.street}</p>
                    <p>{apartment.city}, {apartment.state}</p>
                    <p>Manager Name: {apartment.manager}</p>
                    <p>Manager Email: {apartment.email}</p>
                    <p>Price: ${apartment.price}</p>
                    <p>Bedrooms: {apartment.bedrooms}</p>
                    <p>Bathrooms: {apartment.bathrooms}</p>
                    <p>Are pets allowed: {apartment.pets}</p>
                    {/* <Link to={`/apartmentedit/${apartment.id}`}
                        className="button">Edit
                </Link> */}
                </div>

            </>
        )
    }
}