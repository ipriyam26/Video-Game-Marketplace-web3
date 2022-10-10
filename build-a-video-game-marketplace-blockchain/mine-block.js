import {
  getBlockchain,
  getTransactions,
  writeBlockchain,
  writeTransactions
} from './blockchain-helpers.js';

import sha256 from 'crypto-js/sha256.js';
// Add your code below

const chain = getBlockchain();
const previousBlock = chain[chain.length -1];
const transactions = getTransactions();
let hash = '';
let nonce = 0;
while (!hash.startsWith('00')) {
  hash = sha256(nonce + previousBlock.hash +JSON.stringify(transactions)).toString();
  nonce += 1;
  // console.log(hash)
}

const block = {
  'hash': hash,
  'previousBlock': previousBlock.hash,
  'nonce': nonce,
  transactions: transactions
}
chain.push(block);
writeBlockchain(chain);

// {
//   "hash": "00f078fcf720b5172cf01737a7017ec5aa36001cf3f89666bba5d709b3d59eff",
//   "previousBlock": "00b808a9a22a73a32ffbdb9114efc929c0f47a73cce26cc1c8dd5fc1b0fa64d4",
//   "nonce": 356,
//   "transactions": [
//   ]
// },
