const hre = require("hardhat");

async function main() {
  const OnchainCredentials = await hre.ethers.getContractFactory("OnchainCredentials");
  const credentials = await OnchainCredentials.deploy();
  await credentials.deployed();
  console.log("OnchainCredentials deployed to:", credentials.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});