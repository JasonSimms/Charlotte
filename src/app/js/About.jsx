import React from "react";
// Cards shamelessly copied from Chyno Delux: https://codepen.io/ChynoDeluxe/pen/bdXeqQ?editors=1100

const About = props => {
  return (
    <div className="container">
      <div className="about-div">
        <h2>All About MarketAware...</h2>
        <div className="product">
          <h3>Getting Started...</h3>
          <p>Login to get access to the best features!</p>
          <p>
            Enter any valid NYSE ticker in the search bar above or make a
            selection provided.
          </p>
          <p>
            Charts will present all recent financial data for a given stock
            Symbol.
          </p>
          <p>
            Trends brings you in the know with recent news headlines and
            connects you with the community.
          </p>
          <p>
            Outlook removes emotions from investing by providing an objective
            evaluation on your stock of interest.
          </p>
          <h3>Financial Disclaimer</h3>
          <p>
            All information found here including predictions,view,commentary, &
            suggestions are for informational and entertainment purposes only
            and should not be viewed as investment advice. I am not a licensed
            financial advisor.
          </p>
          <p>
            I am not responsible for any investment actions which are a result
            of your use of this site.
          </p>
          <p>
            All financial investments carry risk, before engaging in such
            activities consider these as described by your broker and be
            prepared to loose some or all capital investment
          </p>
          <p>
            As a hobby investor the creator of this site may or may not have
            standing positions in many business you will see here.
          </p>

          <h2>Mission:</h2>
          <p>
            A Mobile First snapshot of data for frequent traders to stay in
            touch with developments in their favorite stocks.
          </p>
          <h2>Elements:</h2>
          <ul>
            <li>Data is renewed on every load</li>
            <li>
              MongoDB server provides community interaction and algorithmic
              calculations for the RoboAdvisor
            </li>
          </ul>
        </div>
        <a target="_blank" href="https://github.com/JasonSimms/Charlotte">
          <img src="/githubicon.png" alt="Github" height="150px" />
        </a>
      </div>
      <div className="about-div container">
        <h3>Team:</h3>
        <br />
        <div className="blog-card">
          <div className="meta">
            <div
              className="photo"
              style={{
                backgroundImage: `url("https://media.licdn.com/dms/image/C4D03AQH0M4Xa6tfn8A/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=OLlc_doclXvQEmttX1KCfj5GXNl9gMY8hM3318HFhkk")`
              }}
            />
          </div>
          <div className="description">
            <h1>Jason Simms</h1>
            <h2>Trading Enthusiast and Ironhacker</h2>
            <p>
              {" "}
              A Californian Expat web developer, with some war stories from Day
              Trading & Options Markets.
              <br />
              <br />
              <br />
            </p>
            <p className="read-more">
              <a href="#">Linkedin</a>
            </p>
          </div>
        </div>

        <div className="blog-card alt">
          <div className="meta">
            <div
              className="photo"
              style={{
                backgroundImage: `url("https://media.licdn.com/dms/image/C5603AQEV9jxH5DblWQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=Emu-5jlsFl2vsq-MqaQIPZKPE-4pJkLGqYf4AbcugaU")`
              }}
            />
          </div>
          <div className="description">
            <h1>Vivian Sarazin</h1>
            <h2>Project Mentor</h2>
            <p>
              {" "}
              Co-admin @growthhacking.fr & Teacher Assistant @ironhack
              <br />
              <br />
              <br />
            </p>
            <p className="read-more">
              <a href="https://www.linkedin.com/in/viviansarazin/">Linkedin</a>
            </p>
          </div>
        </div>

        <div className="blog-card">
          <div className="meta">
            <div
              className="photo"
              style={{
                backgroundImage: `url("https://media.licdn.com/dms/image/C5103AQG67SUrS7p_BQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=ApbnpNPZQIGt4Zw9VJvgMcwYpeW7fuSiuV3b9fg9glQ")`
              }}
            />
          </div>
          <div className="description">
            <h1>Lukas Gisder-Dubé</h1>
            <h2>Lead Instructor & React-Template-Architect</h2>
            <p>
              {" "}
              "Good Morning Students"
              <br />
              "Don't Use Webpack"
              <br />
              "I know I say this alot...but"
              <br />
            </p>
            <p className="read-more">
              <a target="_blank" href="https://www.linkedin.com/in/gisderdube/">
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="about-div">
        <h3>Technology Used for this Project...</h3>
        <div className="row">
          <div className="cards">
            <h4>Recharts </h4>
            <img src="/recharts.png" alt="yelp" height="150px" />
            <img src="/appimages/codechart.png" alt="charting code"/>
          </div>
          <div className="cards">
            <h4>IEX Trading Financial Data API</h4>
            <img src="/iextradinglogo.png" alt="apify logo" height="80px" />
            <img src="/appimages/codeiexcall.png" alt="iex code"/>

          </div>
          <div className="cards">
            <h4>Mongoose MongoDB JS and of course NodeJs</h4>
            <img
              src="/mongoose-transactions.png"
              height="120px"
              alt="mongoose"
            />
            <img src="/appimages/codecomment.png" alt="iex code"/>
            <img src="/appimages/codecomment2.png" alt="iex code"/>


          </div>
          <div className="cards">
            <h4>React</h4>
            <img src="/reactlogo.png" height="120px" alt="mongoose" />
            <img src="/appimages/codereact.png" alt="iex code"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
