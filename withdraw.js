require("dotenv").config({ path: ".env" });

const Caver = require('caver-js')
const caver = new Caver('https://public-node-api.klaytnapi.com/v1/cypress')

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const targetContract = process.env.TARGET_ADDRESS;
const keyring = caver.wallet.newKeyring(publicKey, privateKey);

runTransaction();

async function runTransaction(){

  const input_data = caver.abi.encodeFunctionCall({
    name: 'withdraw',
    type: 'function',
    inputs: []
    }, []);
      
  const vt = caver.transaction.smartContractExecution.create({
    from: publicKey, to: targetContract, input: input_data, gas: 5000000
  })
  const signed = await caver.wallet.sign(keyring.address, vt)
  const receipt = await caver.rpc.klay.sendRawTransaction(signed)
  console.log(receipt)

}

