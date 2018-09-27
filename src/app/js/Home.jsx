import React from 'react'

const Home = props => {
    return (
        <div className="generic">
                <img src="https://i.redd.it/e2q15bipo8901.jpg" alt="you"/>

            <h1>Hello, {props.user ? props.user.email : 'Stranger'}!</h1>
            
        </div>
    )
}

export default Home
