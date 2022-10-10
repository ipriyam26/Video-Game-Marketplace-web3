import {
  getBlockchain,
  getTransactions,
  writeBlockchain,
  writeTransactions
} from './blockchain-helpers.js';

import sha256 from 'crypto-js/sha256.js';
// Add your code below

const chain=getBlockchain();
const previousHash = chain.slice(-1)['hash'];
const transactions = getTransactions();
var hash = '';
var nonce = 0;
while (!hash.startsWith('00')){
hash =sha256(nonce+previousHash+JSON.stringify(transactions)).toString();
nonce++;
}

const block = {
  'hash':hash,
  'previousHash':previousHash,
  'nonce':nonce,
  transactions:transactions
}
chain.push(block);
writeBlockchain(chain);

// {
//   "hash": "00f078fcf720b5172cf01737a7017ec5aa36001cf3f89666bba5d709b3d59eff",
//   "previousHash": "00b808a9a22a73a32ffbdb9114efc929c0f47a73cce26cc1c8dd5fc1b0fa64d4",
//   "nonce": 356,
//   "transactions": [
//   ]
// },
