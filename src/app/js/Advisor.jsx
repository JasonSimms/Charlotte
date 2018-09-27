import React from "react";

class Advisor extends React.Component {
  constructor(props) {
    super(props);

    this._strikeFilter = this._strikeFilter.bind(this);
  }

  componentDidMount() {
    // console.log(this.props, `props @ advisor`);
    if (!this.props.options) {
      this.props.searchO();
    } else if (this.props.options.underlyingSymbol !== this.props.stock) {
      this.props.searchO();
    }
  }
  render() {
    let content, mappedCalls, mappedPuts;
    let optionsContent = "Options Info Loading";
    let earningsDate = "No Earnings Announcement info available :-(";
    // let mappedCalls = 0;
    // let mappedPuts = 0;
    let outlook = "The Algo cannot always see the future."

    //OPTIONS INFO?
    if (this.props.options) {
      console.log(this.props, `props @ advisor`);

      // Display Earnings Date
      let nextEarningsDisplay = "not Available! :-(";
      let nextEarnings = this.props.options.quote.earningsTimestampStart;
      if (this.props.options.quote.earningsTimestampStart)
        nextEarningsDisplay = new Date(nextEarnings * 1000)
          .toString()
          .slice(0, 10);
      earningsDate = `Next Earnings Annoucement: 
        ${nextEarningsDisplay}
        `;
      // Filter the options
      // this._strikeFilter();
      //BUILD THE OPTIONS TABLE
      let current = this.props.options.quote.ask;
      let step =
        this.props.options.options[0].calls[1].strike -
        this.props.options.options[0].calls[0].strike;
      let span = 5 * step;
      let calls2 = this.props.options.options[0].calls.filter(
        el => el.strike < current + span && el.strike > current - span
      );
      let puts2 = this.props.options.options[0].puts.filter(
        el => el.strike < current + span && el.strike > current - span
      );
      mappedCalls = calls2.map((el, i) => {
        return (
          <tr key={el.contractSymbol} className="calls">
            <td>
              {el.bid} / {el.ask}
            </td>
            <td>{el.percentChange}</td>
            <td>{el.openInterest}</td>
            <td>{el.strike}</td>
          </tr>
        );
      });
      mappedPuts = puts2.map((el, i) => {
        return (
          <tr key={el.contractSymbol} className="puts">
            <td>
              {el.bid} / {el.ask}
            </td>
            <td>{el.percentChange}</td>
            <td>{el.openInterest}</td>
            <td>{el.strike}</td>
          </tr>
        );
      });
      //BUILD THE ALGO
      let avgMomentum = " ";
      let bid = this.props.options.quote.bid
      let fiftyavg= this.props.options.quote.fiftyDayAverage
      let twohundavg = this.props.options.quote.twoHundredDayAverage
    //   let fiftylow = this.props.data.quote.week52High
    //   let fiftyhi = this.props.data.quote.week52Low

      if(fiftyavg > twohundavg && bid > fiftyavg) { avgMomentum = "This stock is a buy! It shows a healthy rise over time and currently poised to continue it's climb!"}
else if(fiftyavg > twohundavg && bid < fiftyavg) { avgMomentum = "Stay Away! Unless you know something... this business shows terrible momentum over the short and long term."}
let part1 = [`i like it`,`maybe you should buy it with Haakons SingleCoin?`,`i dont like it`]
let score = 1;
outlook = part1[score]



      let Banner = (
        <span>
         <h3 className="outlook">
          {outlook}
          <br/>
          <br/>
          {avgMomentum}
         </h3>
          <h2>
            {this.props.options.quote.longName} Last Bid:{" "}
            {this.props.options.quote.bid}
          </h2>


          <table className="bannertable">
            <tr>
              <th>Average</th>
              <th>Price</th>
              <th>Daily Delta</th>
            </tr>
            <tr>
              <td>50 days</td>
              <td>{this.props.options.quote.fiftyDayAverage}</td>
              <td>
                {this.props.options.quote.fiftyDayAverageChange} /{" "}
                {this.props.options.quote.fiftyDayAverageChangePercent}
              </td>
            </tr>
            <tr>
              <td>200 days</td>
              <td>{this.props.options.quote.twoHundredDayAverage}</td>
              <td>
                {this.props.options.quote.twoHundredDayAverageChange} / {" "}
                {this.props.options.quote.twoHundredDayAverageChangePercent}
              </td>
            </tr>
          </table>

        </span>
      );
      optionsContent = (
        <div>
            {Banner}
          <h2>
            {earningsDate}
          </h2>
          <h3>Calls for this week</h3>
          <table>{mappedCalls}</table>
          <h3>Puts for this week</h3>
          <table>{mappedPuts}</table>
        </div>
      );
    }

    if (1 > 0) {
      content = "something nice";
    } else {
      content = "something bad";
    }
    // console.log(this.props)
    return (
      <div>
        {content}
        <br />
        <br />
        <br />
        {optionsContent}
      </div>
    );
  }

  _strikeFilter() {
    console.log(`empty function`);
  }
}

export default Advisor;
