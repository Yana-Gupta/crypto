import { run } from "hardhat";

const verify = async (contractAddress: String, agruments: []) => {
    console.log("Verifying contract...")

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: agruments
        })
        console.log("Contract verified")
    } catch (e: any) {
        if (e.message.includes("already verified")) {
            console.log("Contract already verified")
            process.exit(0)
        }
        else {
            console.error(e)
        }
    }

}

export default verify