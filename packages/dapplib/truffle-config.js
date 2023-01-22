require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rebel sad snake hover praise army genuine'; 
let testAccounts = [
"0x0491d1f1204409fa56d17dcf40d3003e1fbeb8c40f1dfe7371751d89cee9e9fc",
"0x9e67c3c8ecad7d4e4d155885ee229de025337cc67d123a37d043a63c1efcc26d",
"0xcadb29dea60c568e75dd73cf37da32c458e424ec45338844d8673d94fcfe74ed",
"0x48fbd75ed7ff16046750d47ac5aa5b1e222448e021006c6d66a0ec0e956f005a",
"0xf493d64a090a22d4e39ca011b711ba9ba70f41bfcad53d018e08a1867b9c99b1",
"0x947ccf7bf30e53ce4e486a6790c55c7b69eef605957ea7b3006dec622531d2ec",
"0x91186805362f8e2ee47bbc2b94139e9c1d17d2f9c8790453c40fee9eee740bc6",
"0x27025dde51167f701ec24d2d1096fe339e335b6d09131c0f27b5b513860e2695",
"0x4f18487ccc4225606c72744d2ed196fba7ee19333d6a8dce8f0b4cfe90481492",
"0x43c67b1d77f34c345e1c69a41091bea4d579f40721643b369b84f1539ee315f6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


