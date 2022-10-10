import { writeBlockchain, writeTransactions } from './blockchain-helpers.js';
// Add your code below

const genisis = {
    'hash':'0',
    'previousHash':null
}
writeBlockchain([genisis])

writeTransactions([])