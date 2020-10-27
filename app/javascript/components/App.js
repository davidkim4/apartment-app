import React, { Component } from "react"

import Header from './components/Header'
import Footer from './components/Footer'

import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import mockApartments from './mockApartments.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }

  render() {
    console.log(this.state.apartments);
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props
    return (
      <Router>
        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }

        { !logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentedit/:id" component={ApartmentEdit} />
          <Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={this.state.apartments} />} />
          <Route path="/apartmentnew" component={ApartmentNew} />
          <Route path="/apartmentshow/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment =>
              apartment.id === parseInt(id))
            return (
              < ApartmentShow apartment={apartment} />
            )
          }}
          />
          <Route component={NotFound} />
        </Switch>

        <Footer
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_up_route={sign_up_route}
          sign_out_route={sign_out_route}
        />
      </Router>
    )
  }
}