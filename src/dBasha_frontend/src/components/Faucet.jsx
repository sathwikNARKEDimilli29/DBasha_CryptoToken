import React from "react";

function Faucet() {
  async function handleClick(event) {
    // Handle the button click event here
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            <span role="img" aria-label="tap emoji">
              🛸
            </span>
            dBasha Faucet
          </h2>
          <p className="card-text">
            Get your free dBasha tokens here! Claim 10,000 dBasha tokens to your
            account.
          </p>
          <div className="text-center">
            <button
              id="btn-payout"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Claim Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faucet;
