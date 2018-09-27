import React from "react";

const Home = props => {
  return (
    <div className="home">
      {/* <img src="https://i.redd.it/e2q15bipo8901.jpg" alt="you"/> */}

      <h1 className="greeting">
        Welcome to Market Aware,{" "}
        {props.user
          ? props.user.email
          : "login for access to all the best features"}
        !
      </h1>
      <h3 className="greeting2">
        Enter a valid NYSE Symbol above to get started...
      </h3>
    </div>
  );
};

export default Home;
