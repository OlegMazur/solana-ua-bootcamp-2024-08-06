import "dotenv/config";
import { Keypair } from "@solana/web3.js";

let privateKey = process.env["SECRET_KEY"];
if (privateKey === undefined) {
  console.log("Add SECRET_KEY to .env!");
  process.exit(1);
}

function generateRightKey(key){
    const asArray = Uint8Array.from(JSON.parse(key));
    const keypair = Keypair.fromSecretKey(asArray);
    return keypair
}
   let keypair =generateRightKey(privateKey);
console.log(`Public key: ${keypair.publicKey.toBase58()}`);
console.log(`Public key: ${keypair.publicKey}`);
