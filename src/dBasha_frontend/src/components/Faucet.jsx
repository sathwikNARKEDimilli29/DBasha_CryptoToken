import React, { useState } from "react";
import { dBasha_backend } from "../../../declarations/dBasha_backend";

function Faucet() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [btnText, setBtnText] = useState("Gimme gimmie 🤑🤑");
  async function handleClick(event) {
    setIsDisabled(true);
    let res = await dBasha_backend.payOut();
    setBtnText(res);
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
              disabled={isDisabled}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faucet;
