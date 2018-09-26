import ReactDOM from 'react-dom'
import React from 'react'
const Application = require('./Application').default
import { BrowserRouter } from "react-router-dom";

class Wrapper extends React.Component {
    render(){
        return (
            <BrowserRouter>
            <Application />
            </BrowserRouter>
        )
    }
}

function renderApp() {
    
    ReactDOM.render(<Wrapper/>, document.getElementById('app'))
}

renderApp()

if (module.hot) {
    module.hot.accept(renderApp)
}
