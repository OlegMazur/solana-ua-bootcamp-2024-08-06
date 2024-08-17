import { Keypair } from "@solana/web3.js";
const startWith = 'MA';
let count = 0;
function generateRightKey() {
    let keypair = Keypair.generate();
    let isRightKey: Boolean = false;
    do {
        count++;
        console.log(`count: `, count);
        keypair = Keypair.generate();
        isRightKey = keypair.publicKey.toBase58().startsWith(startWith)
    }
    while (!isRightKey)

    return keypair.publicKey.toBase58()
}
const rightKey = generateRightKey();
console.log(`The public key is: `, rightKey);
console.log(`count: `, count);
console.log(`✅ Finished!`);