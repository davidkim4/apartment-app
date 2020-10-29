import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

export default class ApartmentIndex extends Component {
    render() {
        return (
            <>
                <h3>Apartment Index</h3>
                <div id="index-body">
                    <Row xs="3">
                        {this.props.apartments.map((apartment, index) => {
                            return (
                                <Col xs="6" sm="4">
                                    <div key={index} className="index-card">
                                        <h3>{apartment.street}</h3>
                                        <h3>{apartment.city}</h3>
                                        <h3>{apartment.state}</h3>
                                        <br />
                                        <Link to={`/apartmentshow/${apartment.id}`} className="button">More Info
                                </Link>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </>
        )
    }
}