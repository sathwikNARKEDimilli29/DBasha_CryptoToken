# DBasha Crypto Token (With Wallet and Fauset Functionality)

Creating our own cryptocurrency token, called DBash Coin, and developing a dedicated wallet for it is an exciting endeavor in the world of blockchain technology. DBash Coin would provide users with the ability to mint their tokens securely and efficiently. The wallet, on the other hand, would offer essential functions such as transferring DBash Coins between users and even featuring a faucet system for distributing tokens to new users or for promotional purposes. This comprehensive ecosystem not only fosters a sense of ownership but also enables smooth and decentralized peer-to-peer transactions, making DBash Coin a promising addition to the digital currency landscape.

![image](https://github.com/sathwikNARKEDimilli29/dBasha_CryptoToken/assets/97584810/08697a7a-52a7-4985-81da-5399c854ac65)


# Check your Balance

1. Find out your principal id:

```
dfx identity get-principal
```

2. Save it somewhere.

e.g. My principal id is: hith2-dd7at-p2xrj-w6evl-2twud-ejpcj-yfbpc-rtp5x-3svfr-fgovr-tqe
2vxsx-fae

3. Format and store it in a command line variable:

```
OWNER_PUBLIC_KEY="principal \"$( \dfx identity get-principal )\""
```

4. Check that step 3 worked by printing it out:

```
echo $OWNER_PUBLIC_KEY
```

5. Check the owner's balance:

```
dfx canister call token balanceOf "( $OWNER_PUBLIC_KEY )"
```

# Charge the Canister

1. Check canister ID:

```
dfx canister id token
```

2. Save canister ID into a command line variable:

```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

3. Check canister ID has been successfully saved:

```
echo $CANISTER_PUBLIC_KEY
```

4. Transfer half a billion tokens to the canister Principal ID:

```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

# Deploy the Project to the Live IC Network

1. Create and deploy canisters:

```
dfx deploy --network ic
```

2. Check the live canister ID:

```
dfx canister --network ic id token
```

3. Save the live canister ID to a command line variable:

```
LIVE_CANISTER_KEY="principal \"$( \dfx canister --network ic id token )\""
```

4. Check that it worked:

```
echo $LIVE_CANISTER_KEY
```

5. Transfer some tokens to the live canister:

```
dfx canister --network ic call token transfer "($LIVE_CANISTER_KEY, 50_000_000)"
```

6. Get live canister front-end id:

```
dfx canister --network ic id token_assets
```

7. Copy the id from step 6 and add .raw.ic0.app to the end to form a URL.
   e.g. zdv65-7qaaa-aaaai-qibdq-cai.raw.ic0.app
