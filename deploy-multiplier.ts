import { DefaultProvider, bsv } from 'scrypt-ts'
import { Multiplier } from './src/contracts/Multiplier'
import { NeucronSigner } from 'neucron-signer'

async function main() {
    const provider = new DefaultProvider({ network: bsv.Networks.mainnet })
    const signer = new NeucronSigner(provider)
    const amount = 1 // Adjust as needed for the transaction amount

    await signer.login('sales@timechainlabs.io', 'string') // Replace 'your-password' with your actual password
    await Multiplier.loadArtifact()

    const num1 = BigInt(6)
    const num2 = BigInt(7)
    const instance = new Multiplier(num1, num2)
    await instance.connect(signer)

    const deployTx = await instance.deploy(amount)
    console.log(
        'Multiplier contract deployed: https://whatsonchain.com/tx/' +
            deployTx.id
    )

    const product = num1 * num2
    await new Promise((f) => setTimeout(f, 5000))
    const { tx: callTx } = await instance.methods.unlock(product)
    console.log(
        'Multiplier contract unlocked successfully: https://whatsonchain.com/tx/' +
            callTx.id
    )
}

main()
