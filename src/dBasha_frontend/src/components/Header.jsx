import React from "react";

function Header() {
  return (
    <header>
      <div className="container mt-4">
        <div className="card bg-danger text-white">
          <div className="card-body">
            <h1 className="card-title">
              <span role="img" aria-label="tap emoji">
                🛺🛺🛺
              </span>
              <strong>dBasha Faucet</strong>
            </h1>
            <p className="card-text">
              Welcome to the dBasha Faucet - Get Your Free Tokens Now!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
