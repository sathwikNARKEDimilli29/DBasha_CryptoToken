import React from "react";
import Header from "./Header";
import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";

function App() {
  return (
    <div className="text-center container w-45">
      <div className="container" id="screen">
        <Header />
        <Faucet />
        <Balance />
        <Transfer />
      </div>
    </div>
  );
}

export default App;
