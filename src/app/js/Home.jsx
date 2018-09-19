import React from 'react'

const Home = props => {
    return (
        <div className="container">
            <h1>Hello, {props.user ? props.user.email : 'Stranger'}!</h1>
            <h2>LANDING PAGE WITH INFO ABOUT PROJECT</h2>
        </div>
    )
}

export default Home
