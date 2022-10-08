import { writeBlockchain, writeTransactions } from './blockchain-helpers.js';
// Add your code below


const genisisBlock = {
    hash: "0",
    previousHash: null,
}
writeBlockchain([genisisBlock]);
writeTransactions([]);


