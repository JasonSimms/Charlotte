import React from "react";

class Advisor extends React.Component {
  constructor(props) {
    super(props);

this.state = {

  loading: false
}

  this._strikeFilter = this._strikeFilter.bind(this);
  }

  componentDidMount() {
    if (!this.props.options) {
      this.props.searchO();
    } else if (this.props.options.underlyingSymbol !== this.props.stock) {
      this.props.searchO();
    }
    if (!this.props.earnings) {
      this.props.getEarnings();
    }
    let demo = true;
    if(demo && this.props.stock == "PRGS")this.props.demopopulate()
  }
  render() {
    let content, mappedCalls, mappedPuts, today, calls2, puts2;
    let earnCard = "EARN CARD HERE";
    let optionsContent = "Options Info Loading";
    let earningsDate = "No Earnings Announcement info available :-(";
    // let mappedCalls = 0;
    // let mappedPuts = 0;
    let outlook = "The Algo cannot always see the future.";
    let earner = false;
    //OPTIONS INFO?

    if (this.props.options) {
      console.log(this.props, `props @ advisor`);
      //Buildan earnings card if its included

      // Display Earnings Date
      let nextEarningsDisplay = "not Available! :-(";
      let nextEarnings = this.props.options.quote.earningsTimestampStart;
      if (this.props.options.quote.earningsTimestamp)
        nextEarningsDisplay = new Date(nextEarnings * 1000)
          .toString()
          .slice(0, 10);
      earningsDate = `Next Earnings Annoucement: 
        ${nextEarningsDisplay}
        `;
      // Filter the options
      // this._strikeFilter();
      //BUILD THE OPTIONS TABLE
      if (this.props.options) {
        let current = this.props.options.quote.ask;
        let step =
          this.props.options.options[0].calls[1].strike -
          this.props.options.options[0].calls[0].strike;
          console.log(step)
        let span = 6 * step;
        calls2 = this.props.options.options[0].calls.filter(
          el => el.strike < current + span && el.strike > current - span
        );
        puts2 = this.props.options.options[0].puts.filter(
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
      }

      if (this.props.earnings && this.props.earnings && this.props.options) {

        today = this.props.earnings.amc
        ;

        const mappedtoday = today.map(el => {
          return el.symbol;
        });
        // console.log(this.props.stock)
        if (mappedtoday.includes(this.props.stock) && this.props.earnings) {
          // console.log("earnings TODAY!", mappedtoday, typeof mappedtoday);

          const el = today[mappedtoday.findIndex(k => k == this.props.stock)];
          earner = true;

          // Calculator
          let closing = el.quote.close;
          let estmov = Number(el.estimatedChangePercent);
          let lastmov = el.yearAgo;
          let hiest = (closing * (1 + estmov)).toFixed(1);
          let loest = (closing * (1 - estmov)).toFixed(1);
          let lasthiest = (closing + lastmov).toFixed(1);
          let lastloest = (closing - lastmov).toFixed(1);
          let callsUnder = calls2.filter(
            el => el.strike < hiest && el.strike > closing
          );
          let putsUnder = puts2.filter(el => el.strike < closing);
          // console.log(`calcs here --->`, closing, putsUnder);
          // CALL CALCULATOR
          let a = callsUnder.length;
          let strikelow = callsUnder[a - 2].strike;
          let strikehi = callsUnder[a - 1].strike;
          let cost1 = -1 * (callsUnder[a - 1].bid - callsUnder[a - 2].ask);
          let be1 = callsUnder[a - 1].strike + cost1;
          let max1 =
            callsUnder[a - 1].strike - callsUnder[a - 2].strike - cost1;
          // PUT CALCULATOR
          a = putsUnder.length;
          strikelow = putsUnder[a - 2].strike;
          strikehi = putsUnder[a - 1].strike;
          let cost2 = (putsUnder[a - 1].ask - putsUnder[a - 2].bid).toFixed(2);
          let be2 = putsUnder[a - 1].strike - cost2;
          let max2 = putsUnder[a - 1].strike - putsUnder[a - 2].strike - cost2;

          earnCard = (
            <article className="article column amc algoearncard" key="earncard">
              <h3 className="article__category">
                EARNINGS TODAY!!! {el.quote.companyName} ({el.symbol})
              </h3>
              {el.headline && <h2 className="article__title">{el.headline}</h2>}
              <p className="article__excerpt">
                Est. Price Move
                {el.estimatedChangePercent} <br />
                Last Yr Price Move
                {el.yearAgo}
                {/* / {el.yearAgoChangePercent}% */}
                <br />
                Closing: {el.quote.close}
                {"  "}
                Extended : {el.quote.extendedPrice}/
                {el.quote.extendedChangePercent}% <br />
                Period: {el.fiscalPeriod} <br />
                ConsensusEPS: {el.consensusEPS}
                {"  "}
                Estimated: {el.estimatedEPS}
              </p>
              <h2 className="article__title">Earnings Outlook:</h2>
              <p className="article__excerpt">
                Estimated Hi and Low ranged Prices: {loest} / {hiest}
                <br />
                If last yr repeats: {lastloest} / {lasthiest}
                <br />
                <h2 className="article__title">Going up?</h2>A Conservative Call
                Spread for good earnings: [{strikelow}-{strikehi}]<br />
                will cost {cost1} and has a breakeaven at {be1}
                <br />
                max profit of {max1} per contract.
                <br />
                {/* PUT CALCS */}
                <h2 className="article__title">Going down?</h2>A Conservative
                Put Spread for bad earnings: [{strikehi}-{strikelow}]<br />
                will cost {cost2} and has a breakeaven at {be2}
                <br />
                max profit of {max2} per contract.
                <br />
              </p>
            </article>
          );
        }
      }
      //BUILD THE ALGO
      let avgMomentum = " ";
      let bid = this.props.options.quote.bid;
      let fiftyavg = this.props.options.quote.fiftyDayAverage;
      let twohundavg = this.props.options.quote.twoHundredDayAverage;
      //   let fiftylow = this.props.data.quote.week52High
      //   let fiftyhi = this.props.data.quote.week52Low

      if (fiftyavg > twohundavg && bid > fiftyavg) {
        avgMomentum =
          "Momentum Advisor Says: This stock is a buy! It shows a healthy rise over time and currently poised to continue it's climb!";
      } else if (fiftyavg > twohundavg && bid < fiftyavg) {
        avgMomentum =
          "Momentum Advisor Says: Stay Away! Unless you know something... this business shows terrible momentum over the short and long term.";
      }
      let part1 = [
        `i like it`,
        `Robo Advisor Evaluation = #2`,
        `i dont like it`
      ];
      let score = 1;
      outlook = part1[score];

      let Banner = (
        <span>
          <h3 className="outlook">
            {outlook}
            <br />
            <br />
            {avgMomentum}
          </h3>
          <h2>
            {this.props.options.quote.longName} Last Bid:{" "}
            {this.props.options.quote.bid}
          </h2>

          <table className="bannertable">
            <thead>
              <tr>
                <th>Average</th>
                <th>Price</th>
                <th>Daily Delta</th>
              </tr>
            </thead>
            <tbody>
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
                  {this.props.options.quote.twoHundredDayAverageChange} /{" "}
                  {this.props.options.quote.twoHundredDayAverageChangePercent}
                </td>
              </tr>
            </tbody>
          </table>
        </span>
      );
      optionsContent = (
        <div>
          {Banner}

          {earner ? (
            <div>{earnCard}</div>
          ) : (
            <div>
              <h2>{earningsDate}</h2>
            </div>
          )}
          <h3>Calls for this week</h3>
          <table>
            <thead>
              <tr>
                <th>Bid /Ask</th>
                <th>Change</th>
                <th>Open Interest</th>
                <th>Strike</th>
              </tr>
            </thead>
            <tbody>{mappedCalls}</tbody>
          </table>
          <h3>Puts for this week</h3>
          <table>
            <thead>
              <tr>
                <th>Bid /Ask</th>
                <th>Change</th>
                <th>Open Interest</th>
                <th>Strike</th>
              </tr>
            </thead>
            <tbody>{mappedPuts}</tbody>
          </table>
          <br />
          <br />
          <br />
          <br />
        </div>
      );
      // END OF WRAPPED LOGIC
    }

    if (1 > 0) {
      content = "something nice";
    } else {
      content = "something bad";
    }
    // console.log(this.props)
    return <div>{optionsContent}</div>;
  }

  _strikeFilter() {
    console.log(`empty function`);
  }

  
}

export default Advisor;
