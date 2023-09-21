import React, { useState } from "react";
import { dBasha_backend } from "../../../declarations/dBasha_backend";
import { Principal } from "@dfinity/principal";

function Transfer() {
  const [resId, setResId] = useState("");
  const [amt, setAmt] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function handleClick() {
    setIsDisabled(true);
    setIsHidden(true);
    const amount = Number(amt);
    const recipient = Principal.fromText(resId);
    const r = await dBasha_backend.transfer(recipient, amount);
    setFeedback(r);
    setIsDisabled(false);
    setIsHidden(false);
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Transfer Funds</h2>
          <form>
            <div className="mb-3 row">
              <label
                htmlFor="transfer-to-id"
                className="col-sm-4 col-form-label"
              >
                Recipient's Account:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  id="transfer-to-id"
                  className="form-control form-control-lg" // Use form-control-lg for larger height
                  placeholder="Recipient's account ID"
                  value={resId}
                  onChange={(e) => setResId(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="amount" className="col-sm-4 col-form-label">
                Amount:
              </label>
              <div className="col-sm-8">
                <input
                  type="number"
                  id="amount"
                  className="form-control form-control-lg" // Use form-control-lg for larger height
                  placeholder="Enter the amount"
                  value={amt}
                  onChange={(e) => setAmt(e.target.value)}
                />
              </div>
            </div>

            <div className="text-center">
              <button
                id="btn-transfer"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={isDisabled}
              >
                Transfer Now
              </button>
            </div>
          </form>
          <h6 hidden={isHidden} className="text-center mt-3">
            <mark>
              <strong>{feedback}</strong>
            </mark>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Transfer;

// import React, { useState } from "react";
// import { dBasha_backend } from "../../../declarations/dBasha_backend";
// import { Principal } from "@dfinity/principal";

// function Transfer() {
//   const [resId, setResId] = useState("");
//   const [amt, setAmt] = useState("");

//   async function handleClick() {
//     const amount = Number(amt);
//     const recipient = Principal.fromText(resId);

//     await dBasha_backend.transfer(recipient, amount);
//   }

//   return (
//     <div className="window white">
//       <div className="transfer">
//         <fieldset>
//           <legend>To Account:</legend>
//           <ul>
//             <li>
//               <input
//                 type="text"
//                 id="transfer-to-id"
//                 value={resId}
//                 onChange={(e) => setResId(e.target.value)}
//               />
//             </li>
//           </ul>
//         </fieldset>
//         <fieldset>
//           <legend>Amount:</legend>
//           <ul>
//             <li>
//               <input
//                 type="number"
//                 id="amount"
//                 value={amt}
//                 onChange={(e) => setAmt(e.target.value)}
//               />
//             </li>
//           </ul>
//         </fieldset>
//         <p className="trade-buttons">
//           <button id="btn-transfer" onClick={handleClick}>
//             Transfer
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Transfer;
