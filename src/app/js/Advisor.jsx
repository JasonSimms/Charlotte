import React from 'react'
import { Link } from 'react-router-dom'
import { PromiseProvider } from 'mongoose';

// const Advisor = props => {
//     let theLocal = JSON.parse(localStorage.getItem('thing'))
//     // console.log(typeof theLocal)
//     // console.log(theLocal.company)
// console.log(props)
//     console.log(`Advisor Component sees: `,props.data)
//     const roboAdvice = "i hate it"
//     return (
//         <div className="container">
//          <h2> The Algo says...
//          {/* {theLocal.company.symbol} */}
//          {/* {theLocal.company.website} */}
// {roboAdvice}
//          </h2>
//              {/* <img src={props.data.logo.url} alt=""/> */}
//         </div>
//     )
// }

// export default Advisor



class Advisor extends React.Component {
    constructor(props) {
        super(props);
    
        // this.state = {
        //   user: this._setUser(true),
        // };
    
        // this._setUser = this._setUser.bind(this);
   
      }

    render() {
        let content;
        if(1 >0){
            content = "somthing nice"
        }else{ content = "something bad"}

// console.log(this.props)
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Advisor;