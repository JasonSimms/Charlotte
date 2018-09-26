import React from "react";
// Cards shamelessly copied from Chyno Delux: https://codepen.io/ChynoDeluxe/pen/bdXeqQ?editors=1100

const About = props => {
  return (
    <div className="container">
      <div className="about-div">
        <h2>All About MarketAware...</h2>
        <div className="product">
          <h3>Mission:</h3>
          <p>
            A Mobile First snapshot of data for frequent traders to stay in
            touch with developments in their favorite stocks.
          </p>
          <h3>Elements:</h3>
          <ul>
            <li>Data is renewed on every load</li>
            <li>
              MongoDB server provides community interaction and algorithmic
              calculations for the RoboAdvisor
            </li>
          </ul>
        </div>
        <a target="_blank" href="https://github.com/JasonSimms/Charlotte">
          <img src="/githubicon.png" alt="Github" height="30px" />
        </a>
      </div>
      <div className="about-div">
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
              <a href="https://www.linkedin.com/in/viviansarazin/">Read More</a>
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
            <img src="/recharts.png" alt="yelp" height="80px" />
          </div>
          <div className="cards">
            <h4>Apify Custom Crawlers</h4>
            <img src="/iextradinglogo.png" alt="apify logo" height="80px" />
          </div>
          <div className="cards">
            <h4>Mongoose MongoDB JS and of course NodeJs</h4>
            <img
              src="/mongoose-transactions.png"
              height="80px"
              alt="mongoose"
            />
          </div>
          <div className="cards">
            <h4>Postman</h4>
            <img src="/reactlogo.png" height="80px" alt="mongoose" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
