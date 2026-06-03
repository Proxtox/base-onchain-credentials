// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title OnchainCredentials
/// @notice Simple soulbound-style credential / attestation system on Base
contract OnchainCredentials {
    mapping(address => mapping(bytes32 => bool)) public hasCredential;

    event CredentialIssued(address indexed recipient, bytes32 indexed credentialType, string metadata);

    function issueCredential(address recipient, bytes32 credentialType, string memory metadata) external {
        hasCredential[recipient][credentialType] = true;
        emit CredentialIssued(recipient, credentialType, metadata);
    }

    function hasCredentialType(address user, bytes32 credentialType) external view returns (bool) {
        return hasCredential[user][credentialType];
    }
}