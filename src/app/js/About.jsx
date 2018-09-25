import React from 'react'

const About = props => {
    return (
        <div className="container">
    <div className="card">
        <h2>All About MarketAware...</h2>
        <div className="product">
            <h3>Mission:</h3>
            <p>A Mobile First snapshot of data for frequent traders to stay in touch with developments in their favorite stocks.</p>
            <h3>Elements:</h3>
            <ul>
                <li>Data is renewed on every load</li>
                <li>MongoDB server provides community interaction and algorithmic calculations for the RoboAdvisor</li>
                </ul>
        </div>
        <a target="_blank" href="https://github.com/JasonSimms/Charlotte" ><img src="/githubicon.png" alt="Github" height="30px"/></a>
    </div>
    <div className="card team">
        <h3>Team:</h3>
        <div className="row">
            <div className="cards">
                <img className="card-img-top ourcardimg" src="https://media.licdn.com/dms/image/C4D03AQH0M4Xa6tfn8A/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=OLlc_doclXvQEmttX1KCfj5GXNl9gMY8hM3318HFhkk"
                    alt="jimg" height="80px"/>
                <div className="card-body">
                    <h4>Creator Jason Simms: Ironhacker and trading enthusiast.
                    </h4>
                    <a target="_blank" href="https://www.linkedin.com/in/jason-simms/"><button>See Me on Linkedin</button></a>
                </div>
            </div>
            <div className="cards">
                <img className="card-img-top ourcardimg" src="https://media.licdn.com/dms/image/C5603AQEV9jxH5DblWQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=Emu-5jlsFl2vsq-MqaQIPZKPE-4pJkLGqYf4AbcugaU"
                    alt="Vimg" height="80px"/>
                <div className="card-body">
                    <h4>Project Mentor: Co-admin @growthhacking.fr & Teacher Assistant @ironhack</h4>
                    <a target="_blank" href="https://www.linkedin.com/in/viviansarazin/" ><button>See Me on Linkedin</button></a>
                </div>
            </div>
            <div className="cards">
                <img className="card-img-top ourcardimg" src="https://media.licdn.com/dms/image/C5103AQG67SUrS7p_BQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=ApbnpNPZQIGt4Zw9VJvgMcwYpeW7fuSiuV3b9fg9glQ"
                    alt="Vimg" height="80px"/>
                <div className="card-body">
                    <h4>Lead Instructor and React-Template-Architect Lukas Gisder-Dubé : Teacher @ironhack </h4>
                    <a target="_blank" href="https://www.linkedin.com/in/gisderdube/" ><button>See Me on Linkedin</button></a>
                </div>
            </div>
        </div>
    </div>
    <div className="card tech">
        <h3>Technology Used for this Project...</h3>
        <div className="row">

            <div className="cards">
                <h4>Recharts </h4>
                <img src="/recharts.png" alt="yelp" height="80px"/>
            </div>
            <div className="cards">
                <h4>Apify Custom Crawlers</h4>
                <img src="/iextradinglogo.png" alt="apify logo" height="80px"/>
            </div>
            <div className="cards">
                <h4>Mongoose MongoDB JS and of course NodeJs</h4>
                <img src="/mongoose-transactions.png" height="80px" alt="mongoose"/>
            </div>
            <div className="cards">
                <h4>Postman</h4>
                <img src="/reactlogo.png" height="80px" alt="mongoose"/>
            </div>
        </div>
    </div>
    </div>
    )
}

export default About
