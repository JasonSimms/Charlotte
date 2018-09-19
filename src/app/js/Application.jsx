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
            stock: "SPY",
            data: ""
        }

        this._setUser = this._setUser.bind(this)
        this._resetUser = this._resetUser.bind(this)
        this._searchItems = this._searchItems.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);
        

    }

    componentDidMount() {
        this._setUser()
        axios.get(
            `https://api.iextrading.com/1.0/stock/spy/batch?types=quote,news,chart&range=1m&last=10`)
            .then(result => this.setState({data: result}))
            console.log(this.state)
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
                        <Route exact path="/chart" render={() => <Chart 
                        stock={this.state.stock} 
                        data={this.state.data}
                        />} />
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
        // console.log("::app/js/Application searchItems", x);
        //API IS NOT CASE SENSITIVE
        axios.get(
            `https://api.iextrading.com/1.0/stock/${x}/batch?types=company,logo`)
            .then(result =>   {
                console.log(result.data)
                this.setState({
                    data: result.data,
                    stock: result.data.company.symbol,
                })
                console.log(this.state.data.company.companyName,`current stock`)

                return api.post(
                    `/api/search`,
                    { symbol: this.state.stock, companyName:this.state.data.company.companyName, logo:this.state.data.logo.url, visitor:this.state.user},
                        )
            })
            .then(result => {
                // do something here with api result
                // if we have result.token --> localStorage.setItem("identity", result.token) (if we have updated the user)
                // this._setUser()
            })
            .catch(err => console.log(err))
        }




      _handleSearchChange(value) {
        this.setState({
            query: value,
        })
      }
}

export default Application
