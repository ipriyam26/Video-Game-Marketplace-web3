import {
  getTransactions,
  writeTransactions,
  getWallets,
  writeWallets
} from './blockchain-helpers.js';

import EC from 'elliptic';
const ec = new EC.ec('p192');

const newWalletName = process.argv[2];
// Add your code below
const keyPair = ec.genKeyPair();
var wallets = getWallets();

const keyPublic = keyPair.getPublic('hex');
const keyPrivate = keyPair.getPrivate('hex');

wallets[newWalletName]={
  'publicKey':keyPublic,
  'privateKey':keyPrivate,
};
writeWallets(wallets);

var transactions = getTransactions();
const newTransaction = {
  'buyerAddress':null,
  'sellerAddress':keyPublic,
  'price':40
};
transactions.push(newTransaction)
writeTransactions(transactions);
