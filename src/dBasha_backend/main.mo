import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";

actor Token {
  var owner : Principal = Principal.fromText("ngo6p-ylkef-x5q7h-hf636-d2yzs-xahzy-liaia-o2myf-yqmep-2amqu-hqe");
  var totalSupply : Nat = 1000000000;
  var symbol : Text = "Dbasha";

  //creating a hashmap
  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  //assigning ourselves the total supply
  balances.put(owner, totalSupply);

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

};
