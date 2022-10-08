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
const privateKey = keyPair.getPrivate('hex');
const publicKey = keyPair.getPublic('hex');
const wallets = getWallets();

wallets[newWalletName] = {
  'publicKey': publicKey,
  'privateKey': privateKey,
};
const transactions = getTransactions();
const newTransaction = {
  'buyerAddress': null,
  'sellerAddress': publicKey,
  'price':40
}
transactions.push(newTransaction);
writeTransactions(transactions);
writeWallets(wallets);