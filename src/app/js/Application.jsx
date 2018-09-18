import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import Auth from './Auth'
import Home from './Home'
import Navigation from './Navigation'
import Profile from './Profile'
import NotFound from './NotFound'
import api from './utils/api'
import Searchbar from './Searchbar'
import Chart from './Chart'


class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this._setUser(true),
            query: "",
            stock: "aapl",
            data: ""
        }

        this._setUser = this._setUser.bind(this)
        this._resetUser = this._resetUser.bind(this)
        this._searchItems = this._searchItems.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);
        

    }

    componentDidMount() {
        this._setUser()
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation user={this.state.user} />
                    <Searchbar 
                   search={this.state.query}
                   handleSearchChange={this._handleSearchChange}
                   searchItems={this._searchItems}
                                    
                    />
                    <Switch>
                        <Route exact path="/chart" render={() => <Chart stock={this.state.stock} />} />
                        <Route exact path="/" render={() => <Home user={this.state.user} />} />
                        <Route exact path="/profile" render={() => <Profile user={this.state.user} />} />
                        <Route
                            path="/auth"
                            render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

    _resetUser() {
        this.setState({
            user: null,
        })
    }

    _setUser(init) {
        const token = localStorage.getItem('identity')
        if (token) {
            const decoded = jwtDecode(token)
            delete decoded.iat
            if (init) return decoded
            this.setState({ user: decoded })
        } else {
            return null
        }
    }

    _searchItems(event) {
        let x = this.state.query;
        event.preventDefault();
        console.log("::app/js/Application searchItems", x);
        //API IS NOT CASE SENSITIVE
        this.setState({
            stock: x,
        })
        console.log(this.state)
      }
      _handleSearchChange(value) {
        this.setState({
            query: value,
        })
        console.log(this.state.query)
      }
}

export default Application
