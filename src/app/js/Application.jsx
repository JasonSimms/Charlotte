import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
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
      options: "no options",
      user: this._setUser(true),
      query: "",
      stock: "aapl",
      data: "",
      test: "",
      chart: "",
      comment: "",
      comments: "",
      displayname: this._setUser(true)
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

    this._searchOptions = this._searchOptions.bind(this);
    this._unixDateAdj = this._unixDateAdj.bind(this)
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
      <div className="app">
        {/* Remove Debug!!!! on production */}
        <CookieConsent debug={false}>
          <h3>This website uses cookies to enhance the user experience.</h3>
          <br />
          <h3>Financial Disclaimer : </h3>
          All information found here including predictions,view,commentary, &
          suggestions are for informational and entertainment purposes only and
          should not be viewed as investment advice. I am not a licensed
          financial advisor. I am not responsible for any investment actions
          which are a result of your use of this site. All financial investments
          carry risk, before engaging in such activities consider these as
          described by your broker and be prepared to loose some or all capital
          investment As a hobby investor the creator of this site may or may not
          have standing positions in many business you will see here.
        </CookieConsent>
        <Navigation user={this.state.user} stock={this.state.stock} />
        <Searchbar
          query={this.state.query}
          handleSearchChange={this._handleSearchChange}
          handleInputChange={this._handleInputChange}
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
                  displayname={this.state.user}
                  commentPost={this._commentPost}
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
                options={this.state.options}
                stock={this.state.stock}
                data={this.state.data}
                refresh={this._refreshHandle}
                searchO={this._searchOptions}
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
    );
  }

  _resetUser() {
    this.setState({
      user: null
    });
  }

  _setComments(lastcomment) {
    console.log(`setcomments fired`);
    this.setState({
      comments: this.state.comments.concat(lastcomment)
    });
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
    event.preventDefault();

    axios
      .get(
        `https://api.iextrading.com/1.0/stock/${x}/batch?types=company,logo,stats,earnings,quote,news,chart&range=1m&last=10`
      )
      .then(result => {
        // console.log(result.data);
        localStorage.setItem(
          "lastSearched",
          JSON.stringify(result.data.company.symbol)
        );
        this.setState({
          data: result.data,
          stock: result.data.company.symbol,
          chart: result.data.chart,
          comments: "",
          query: ""
        });
        console.log(this.state.query, `Search Success`);

        //COULD RENDER CHARTS HERE:
        //HOW TO PUT IN A REDIRECT TO CHARTS? redirect("/chart")
        this.props.history.push("/chart");
        return (
          api
            .post(`/api/search`, {
              symbol: this.state.stock,
              companyName: this.state.data.company.companyName,
              logo: this.state.data.logo.url,
              visitor: this.state.user,
              earnings: this.state.data.earnings.earnings
            })
            // .then(results =>
            //   // console.log(`here i should see comments?`,results)
            //   );
            .then(result => {
              // console.log(`what is here?`,result)// do something here with api result
              this.setState({
                comments: result
              });
            })
        );
        // if we have result.token --> localStorage.setItem("identity", result.token) (if we have updated the user)
        // this._setUser()
      })
      .catch(err => console.log(err));
  }

  _refreshHandle() {
    let theLocal = JSON.parse(localStorage.getItem("lastSearched"));
    console.log(`refresh fired for ${theLocal}`);
    // event.preventDefault();
    axios
      .get(
        `https://api.iextrading.com/1.0/stock/${theLocal}/batch?types=company,logo,quote,peers,stats,news,chart&range=1m&last=10`
      )
      .then(result => {
        // console.log(result.data);
        // localStorage.setItem( "thing", JSON.stringify(result.data))
        this.setState({
          data: result.data,
          stock: result.data.company.symbol,
          chart: result.data.chart
        });
        console.log(
          this.state.data.company.companyName,
          `refreshHandle Success`
        );
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
    console.log(`commentPost Fired`, this.state.comment);
    api
      .post(`/api/comment`, {
        comment: this.state.comment,
        author: this.state.user.email,
        stock: this.state.stock
      })
      .then(result => {
        // console.log(`result is`,result)
        this.setState({
          comments: result,
          comment: ""
        });
        console.log(`state after commentPost`, this.state.comments);
      })
      .catch(err => {
        console.log(err);
      });
  }

  _searchOptions() {
    let y = "none";
    y = this.state.stock;
    console.log(`search options fired for `, y);

    return api
      .post(`/api/search/options`, {
        symbol: y
      })
      .then(result => {
        // console.log(`what is here?`,result)// do something here with api result
        this.setState({
          options: result
        })
        // this._unixDateAdj(result)
      })
      .catch(err => console.log(err));
  }
  _unixDateAdj(arg){
    let dateArr = arg.expirationDates
    let dateArr2 = dateArr.map(el => new Date(el*1000).toString().slice(0,10))
    console.log(dateArr2)
  }
}

export default withRouter(Application);
