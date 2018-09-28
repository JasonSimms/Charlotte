import React, { Component } from "react";

class Earnings extends Component {
  constructor(props) {
    super(props);

    // this._strikeFilter = this._strikeFilter.bind(this);
  }

  componentDidMount() {
    if (!this.props.earnings) {
      this.props.getEarnings();
      console.log(`earnings missing`);
    }
  }
  render() {
    let content = "Loading...";
    let contentBto = ""

    if (this.props.earnings) {
      let amc = this.props.earnings.amc;
      let bto = this.props.earnings.bto;
      let mappedAmc = amc.map((el, i) => {
        return (
            <article className="article column amc" key={el.symbolId}>
              <h3 className="article__category">
                AFTER: {el.quote.companyName} ({el.symbol})
              </h3>
              {el.headline && (
                <h2 className="article__title">
                  {el.headline}
                </h2>
              )}
              <p className="article__excerpt">
                Est. Price Move:  {el.estimatedChangePercent} <br/>
                Last Yr Price Move
                {el.yearAgo}
                {/* / {el.yearAgoChangePercent}%  */}
                <br/>
               Closing: {el.quote.close}
               {"  "}

                Extended : {el.quote.extendedPrice}
                /{el.quote.extendedChangePercent}% <br/>
                Period: {el.fiscalPeriod} <br/>
                ConsensusEPS: {el.consensusEPS}
                {"  "}
                Estimated: {el.estimatedEPS}
              </p>
            </article>
        );
      });
      let mappedBto = bto.map((el, i) => {
        return (
            <article className="article column bto" key={el.symbolId}>
              <h3 className="article__category">
                Before: {el.quote.companyName} ({el.symbol})
              </h3>
              {el.headline && (
                <h2 className="article__title">
                  {el.headline}
                </h2>
              )}
              <p className="article__excerpt">
                Est. Price Move{el.estimatedChangePercent} <br/>
                Last Yr Price Move
                {el.yearAgo}
                {/* / {el.yearAgoChangePercent}% */}
                 <br/>
               Closing: {el.quote.close}
               {"  "}

                Extended : {el.quote.extendedPrice}
                /{el.quote.extendedChangePercent}% <br/>
                Period: {el.fiscalPeriod} <br/>
                ConsensusEPS: {el.consensusEPS}
                {"  "}
                Estimated: {el.estimatedEPS}
              </p>
            </article>
        );
      });

      content =  mappedAmc
      contentBto = mappedBto
      // content = <h3>I've got some info...</h3>
    }
    return (
        <div className="container trendscontainer">
        Todays Earnings Roundup!
        <div className="cardbox">
        {content}</div>
        <div className="cardbox">
        {contentBto}</div>
      </div>
    );
  }
}

export default Earnings;
