import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

import Auth from "./Auth";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";

import Navigation from "./Navigation";
import Profile from "./Profile";
import NotFound from "./NotFound";
import api from "./utils/api";
import Searchbar from "./Searchbar";
import Chart from "./Chart";
import Trends from "./Trends";
import Advisor from "./Advisor";
import Comments from "./commentForm";
import ComDisplay from "./CommentDisplay";
import FinData from "./FinData";

import CookieConsent from "react-cookie-consent";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this._setUser(true),
      query: "",
      stock: "spy",
      data: "",
      test: "",
      chart: "",
      comment: "",
      comments: ""
    };

    this._setUser = this._setUser.bind(this);
    this._setComments = this._setComments.bind(this);

    this._resetUser = this._resetUser.bind(this);
    this._searchItems = this._searchItems.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);
    this._initStock = this._initStock.bind(this);
    this._refreshHandle = this._refreshHandle.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._commentPost = this._commentPost.bind(this);
  }

  componentDidMount() {
    this._setUser();
    if (this.state.data == "") {
      this._refreshHandle();
    }
    // this._setComments();
  }

  render() {
    return (
      <BrowserRouter>

        <div className="app">
          {/* Remove Debug!!!! on production */}
          <CookieConsent debug={true}>
            This website uses cookies to enhance the user experience.
          </CookieConsent>
          <Navigation user={this.state.user} stock={this.state.stock} />
          <Searchbar
            search={this.state.query}
            handleSearchChange={this._handleSearchChange}
            searchItems={this._searchItems}
            stock={this.state.stock}
          />
          <Switch>
            <Route
              path="/chart"
              render={() => (
                <React.Fragment>
                  <Chart
                    stock={this.state.stock}
                    data={this.state.data}
                    refresh={this._refreshHandle}
                  />
                  <FinData stock={this.state.stock} data={this.state.data} />
                </React.Fragment>
              )}
            />
            <Route
              path="/trends"
              render={() => (
                <React.Fragment>
                  <ComDisplay
                    comments={this.state.comments}
                    findComments={this._setComments}
                  />
                  <Comments
                    handleInputChange={this._handleInputChange}
                    comment={this.state.comment}
                    stock={this.state.stock}
                    commentPost={this._commentPost}
                    comments={this.state.comments}
                  />
                  <Trends
                    stock={this.state.stock}
                    data={this.state.data}
                    initStock={this._initStock}
                    refresh={this._refreshHandle}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/roboadvisor"
              render={() => (
                <Advisor
                  stock={this.state.stock}
                  data={this.state.data}
                  refresh={this._refreshHandle}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => <Home user={this.state.user} />}
            />
            <Route exact path="/about" render={() => <About />} />
            <Route
              exact
              path="/profile"
              render={() => <Profile user={this.state.user} />}
            />
            <Route
              path="/auth"
              render={() => (
                <Auth setUser={this._setUser} resetUser={this._resetUser} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>

      </BrowserRouter>
    );
  }

  _resetUser() {
    this.setState({
      user: null
    });
  }

  _setComments() {
    console.log(`setcomments fired`);
    // api
    //   .post(`/api/comment/update`, {
    //     stock: this.state.stock
    //   })
    //   .then(result => {
    //     console.log(`setcomments results`,result);
    //     this.setState({
    //       comments:result
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  _setUser(init) {
    const token = localStorage.getItem("identity");
    if (token) {
      const decoded = jwtDecode(token);
      delete decoded.iat;
      if (init) return decoded;
      this.setState({ user: decoded });
    } else {
      return null;
    }
  }

  _searchItems(event) {
    let x = this.state.query;
    console.log(x);
    event.preventDefault();
    // console.log("::app/js/Application searchItems", x);
    //API IS NOT CASE SENSITIVE
    axios
      .get(
        `https://api.iextrading.com/1.0/stock/${x}/batch?types=company,logo,stats,earnings,news,chart&range=1m&last=10`
      )
      .then(result => {
        console.log(result.data);
        localStorage.setItem(
          "thing",
          JSON.stringify(result.data.company.symbol)
        );
        this.setState({
          data: result.data,
          stock: result.data.company.symbol,
          chart: result.data.chart,
          comments: ""
        });
        console.log(this.state.data.company.companyName, `Search Success`);

        //COULD RENDER CHARTS HERE:
        //HOW TO PUT IN A REDIRECT TO CHARTS? redirect("/chart")
        return api
          .post(`/api/search`, {
            symbol: this.state.stock,
            companyName: this.state.data.company.companyName,
            logo: this.state.data.logo.url,
            visitor: this.state.user,
            earnings: this.state.data.earnings.earnings
          })
          .then(results =>
            this.setState({
              comments: results
            })
          );
      })
      .then(result => {
        // console.log(result)// do something here with api result
        // if we have result.token --> localStorage.setItem("identity", result.token) (if we have updated the user)
        // this._setUser()
      })
      .catch(err => console.log(err));
  }

  _refreshHandle() {
    let theLocal = JSON.parse(localStorage.getItem("thing"));
    console.log(`refresh fired for ${theLocal}`);
    // event.preventDefault();
    axios
      .get(
        `https://api.iextrading.com/1.0/stock/${theLocal}/batch?types=company,logo,stats,news,chart&range=1m&last=10`
      )
      .then(result => {
        console.log(result.data);
        // localStorage.setItem( "thing", JSON.stringify(result.data))
        this.setState({
          data: result.data,
          stock: result.data.company.symbol,
          chart: result.data.chart
        });
        console.log(this.state.data.company.companyName, `abcSearch Success`);
      })
      .catch(err => console.log(err));
  }

  _handleSearchChange(value) {
    this.setState({
      query: value
    });
  }

  _initStock(z) {
    axios
      .get(
        `https://api.iextrading.com/1.0/stock/${z}/batch?types=company,logo,news`
      )
      .then(result => {
        this.setState({
          data: result.data,
          stock: z
        });
        console.log(`init fired`, z);
      });
  }

  _handleInputChange(key, newValue) {
    this.setState({
      [key]: newValue
    });
  }

  _commentPost() {
    console.log(`commented~!@!@#!~`);
    api
      .post(`/api/comment`, {
        comment: this.state.comment,
        stock: this.state.stock
      })
      .then(result => {
        console.log(`commentPOstended`, result);
        this.setState({
          comments: result,
          comment: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Application;
