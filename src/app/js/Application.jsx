import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import Auth from './Auth'
import Home from './Home'
import Navigation from './Navigation'
import Profile from './Profile'
import NotFound from './NotFound'
import api from './utils/api'
import Searchbar from './Searchbar'
import Chart from './Chart'
import Trends from './Trends'
import Advisor from './Advisor'


// This is for deployment




class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this._setUser(true),
            query: "",
            stock: "",
            data: "",
            test: "",
            chart: "",
        }

        this._setUser = this._setUser.bind(this)
        this._resetUser = this._resetUser.bind(this)
        this._searchItems = this._searchItems.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this)
    this._initStock = this._initStock.bind(this)
    this._refreshHandle = this._refreshHandle.bind(this)

        

    }

    componentDidMount() {
        this._setUser()
        if(this.state.data == ""){
            this._refreshHandle()
        }
        // this._initStock("spy")
        // const res =  this._refreshHandle("spy")
    }
    
    render() {
        return (
            <BrowserRouter 
            // history={browserHistory}
            >
                <div>
                    <Navigation user={this.state.user}
                        stock={this.state.stock} 
                        />
                    <Searchbar 
                   search={this.state.query}
                   handleSearchChange={this._handleSearchChange}
                   searchItems={this._searchItems}
                   stock={this.state.stock} 

                                    
                    />
                    <Switch >
                        <Route path="/chart" render={() => <Chart 
                        stock={this.state.stock} 
                        data={this.state.data}
                        refresh={this._refreshHandle}

                        />} />
                        <Route path="/trends" render={() => <Trends 
                        stock={this.state.stock} 
                        data={this.state.data}
                        initStock={this._initStock}
                        refresh={this._refreshHandle}

                        />} />
                        <Route path="/roboadvisor" render={() => <Advisor 
                        stock={this.state.stock} 
                        data={this.state.data}
                        refresh={this._refreshHandle}

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
        console.log(x)
        event.preventDefault();
        // console.log("::app/js/Application searchItems", x);
        //API IS NOT CASE SENSITIVE
        axios.get(
            `https://api.iextrading.com/1.0/stock/${x}/batch?types=company,logo,news,chart&range=1m&last=10`)
            .then(result =>   {
                console.log(result.data)
                localStorage.setItem( "thing", JSON.stringify(result.data.company.symbol))
                this.setState({
                    data: result.data,
                    stock: result.data.company.symbol,
                    chart: result.data.chart,
                })
                // browserHistory.push(`{/chart/${props.stock}}`)
                // this.setState({ data: 
                //     // JSON.parse(
                //         localStorage.getItem("thing")
                //         // )
                //     })
                console.log(this.state.data.company.companyName,`Search Success`)

//COULD RENDER CHARTS HERE:
//HOW TO PUT IN A REDIRECT TO CHARTS? redirect("/chart")                
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

        _refreshHandle() {
            let theLocal = JSON.parse(localStorage.getItem('thing'))
            console.log(`refresh fired for ${theLocal}`)
            // event.preventDefault();
            axios.get(
                `https://api.iextrading.com/1.0/stock/${theLocal}/batch?types=company,logo,news,chart&range=1m&last=10`)
                .then(result =>   {
                    console.log(result.data)
                    // localStorage.setItem( "thing", JSON.stringify(result.data))
                    this.setState({
                        data: result.data,
                        stock: result.data.company.symbol,
                        chart: result.data.chart,
                    })
                    console.log(this.state.data.company.companyName,`abcSearch Success`)
                    })
                    .catch(err => console.log(err))
            }




      _handleSearchChange(value) {
        this.setState({
            query: value,
        })
      }

      _initStock(z) {
          axios.get(
              `https://api.iextrading.com/1.0/stock/${z}/batch?types=company,logo,news`)
              .then(result =>   {
                  this.setState({
                      data: result.data,
                      stock: z,
                    })
                    console.log(`init fired`,z)
                })
            }
}

export default Application
