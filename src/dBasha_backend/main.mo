import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token {
  var owner : Principal = Principal.fromText("ngo6p-ylkef-x5q7h-hf636-d2yzs-xahzy-liaia-o2myf-yqmep-2amqu-hqe");
  var totalSupply : Nat = 1000000000;
  var symbol : Text = "Dbasha";

  //creating a stable datastructure of array
  stable var balanceEntries : [(Principal, Nat)] = [];

  //creating a hashmap
  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  //assigning ourselves the total supply
  if (balances.size() < 1) {
    balances.put(owner, totalSupply);
  };
  //checking the balance of an account
  public query func balanceOf(who : Principal) : async Nat {
    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };
    return balance;
  };

  public query func getSymbol() : async Text {
    return symbol;
  };

  //fauset functionality
  public shared (msg) func payOut() : async Text {
    Debug.print(debug_show (msg.caller));
    if (balances.get(msg.caller) == null) {
      let amt = 10000;
      let res = await transfer(msg.caller, amt);
      return res;
    } else {
      return "Already Claimed!";
    };
  };

  //transfering tokens
  public shared (msg) func transfer(to : Principal, amt : Nat) : async Text {
    let fromBalance = await balanceOf(msg.caller);
    if (fromBalance > amt) {
      let newFromBalance : Nat = fromBalance - amt;
      balances.put(msg.caller, newFromBalance);

      let toBalance = await balanceOf(to);
      let newToBalance = toBalance + amt;
      balances.put(to, newToBalance);
      return "Success";
    } else {
      return "Insufficient Balance";
    };
  };

  //Retain the state of the hashmap through upgrades
  system func preupgrade() {
    balanceEntries := Iter.toArray(balances.entries());
  };
  system func postupgrade() {
    balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
    if (balances.size() < 1) {
      //assigning ourselves the total supply
      balances.put(owner, totalSupply);
    };
  };

};
