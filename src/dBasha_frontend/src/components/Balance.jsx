import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { dBasha_backend } from "../../../declarations/dBasha_backend";

function Balance() {
  const [inputValue, setInputValue] = useState("");
  const [balanceRes, setBalanceRes] = useState("");
  const [symbol, setSymbol] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const balance = await dBasha_backend.balanceOf(principal);
    console.log(balance);
    setBalanceRes(balance.toLocaleString());
    setSymbol(await dBasha_backend.getSymbol());
    setIsHidden(false);
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Check Account Token Balance</h5>
          <div className="form-group">
            <label htmlFor="balance-principal-id">Enter a Principal ID:</label>
            <input
              id="balance-principal-id"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter a Principal ID"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button
            id="btn-request-balance"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Check Balance
          </button>

          <h5 hidden={isHidden} className="mt-3">
            <strong>
              This account has a balance of{" "}
              <mark>
                {balanceRes} {symbol} Tokens
              </mark>{" "}
              .
            </strong>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Balance;
