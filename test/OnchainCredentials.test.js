const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OnchainCredentials", function () {
  let credentials;
  let owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const Credentials = await ethers.getContractFactory("OnchainCredentials");
    credentials = await Credentials.deploy();
    await credentials.deployed();
  });

  it("Should issue a credential", async function () {
    const credType = ethers.utils.id("KYC_VERIFIED");
    await credentials.connect(owner).issueCredential(user.address, credType, "KYC passed");
    expect(await credentials.hasCredentialType(user.address, credType)).to.equal(true);
  });
});