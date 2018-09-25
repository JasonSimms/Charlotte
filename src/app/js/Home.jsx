import React from 'react'

const Home = props => {
    return (
        <div className="container">
            <h1>Hello, {props.user ? props.user.email : 'Stranger'}!</h1>
            <h3>Getting Started...</h3>
            <p>Login to get access to the best features!</p>
            <p>Enter any valid NYSE ticker in the search bar above or make a selection provided.</p>
            <p>Charts will present all recent financial data for a given stock Symbol.</p>
            <p>Trends brings you in the know with recent news headlines and connects you with the community.</p>
            <p>Outlook removes emotions from investing by providing an objective evaluation on your stock of interest.</p>
            <h3>Financial Disclaimer</h3>
            <p>All information found here including predictions,view,commentary, & suggestions are for informational and entertainment purposes only and should not be viewed as investment advice. I am not a licensed financial advisor.</p>
            <p>I am not responsible for any investment actions which are a result of your use of this site.</p>
            <p>All financial investments carry risk, before engaging in such activities consider these as described by your broker and be prepared to loose some or all capital investment</p>
            <p>As a hobby investor the creator of this site may or may not have standing positions in many business you will see here.</p>
        </div>
    )
}

export default Home
