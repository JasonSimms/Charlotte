import React from "react";

class Advisor extends React.Component {
  constructor(props) {
    super(props);

    this._strikeFilter = this._strikeFilter.bind(this);
  }

  componentDidMount() {
    if (this.props.options.underlyingSymbol != this.props.stock)
      this.props.searchO();
    console.log(this.props.options, `options data?`);
  }
  render() {
    let content;
    let earningsDate = "Loading";
    let mappedCalls = 0;

    //OPTIONS INFO?
    if (this.props.options !== "no options") {
      console.log(this.props.options);
      // Display Earnings Date
      let nextEarningsDisplay = "not Available!";
      let nextEarnings = this.props.options.quote.earningsTimestampStart;
      if (this.props.options.quote.earningsTimestampStart)
        nextEarningsDisplay = new Date(nextEarnings * 1000)
          .toString()
          .slice(0, 10);
      earningsDate = `We've got info! Next Earnings is 
        ${nextEarningsDisplay}
        `;
      // Filter the options
      // this._strikeFilter();
      //BUILD THE OPTIONS TABLE
      let optionsTable = "options data Loading";
      console.log(this.props.options);
      let current = this.props.options.quote.ask;
      let step =
        this.props.options.options[0].calls[1].strike -
        this.props.options.options[0].calls[0].strike;
      let span = 5* step;
      let calls2 = this.props.options.options[0].calls.filter(
        el => el.strike < current + span && el.strike > current - span
      );
      mappedCalls = calls2.map((el, i) => {
        return (
          <tr key={i}>
            <td>{el.bid} / {el.ask}</td>
            <td>{el.percentChange}</td>
            <td>{el.openInterest}</td>
            <td>{el.strike}</td>
          </tr>
        );
      });
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
        {this.props.stock}
        <br />
        <br />
        {earningsDate}
        <h3>Calls for this week</h3>
        <table>{mappedCalls}</table>
        <h3>Puts for this week</h3>
        {/* <table>{mappedPuts}</table> */}

      </div>
    );
  }

  _strikeFilter() {
    // console.log(calls2);
    return calls2.map((el, i) => {
      return "hello";
      //  <p>this works?</p>
      {
        /* <tr key={el.contractSymbol}> */
      }
      {
        /* <td>{el.ask}/{el.bid}</td>
<td>{el.openInterest}</td>
<td>{el.percentChange}</td>
<td>{el.strike}</td> */
      }
      // </tr>
    });
    // return mappedCalls
  }
}

export default Advisor;
