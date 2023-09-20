import React from "react";

function Transfer() {
  async function handleClick() {
    // Handle the transfer button click event here
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Transfer Funds</h2>
          <form>
            <fieldset>
              <legend>Recipient's Account: </legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="transfer-to-id"
                  className="form-control"
                  placeholder="Recipient's account ID"
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Amount:</legend>
              <div className="mb-3">
                <input
                  type="number"
                  id="amount"
                  className="form-control"
                  placeholder="Enter the amount"
                />
              </div>
            </fieldset>
            <div className="text-center">
              <button
                id="btn-transfer"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Transfer Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
