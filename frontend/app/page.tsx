"use client";

import { useState } from 'react';

export default function CredentialsApp() {
  const [userAddress, setUserAddress] = useState('');
  const [credType, setCredType] = useState('KYC_VERIFIED');

  const handleIssue = () => {
    alert(`Issued ${credType} credential to ${userAddress} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">On-Chain Credentials</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">User Address</label>
          <input
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="w-full p-4 border rounded-2xl"
            placeholder="0x..."
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Credential Type</label>
          <select
            value={credType}
            onChange={(e) => setCredType(e.target.value)}
            className="w-full p-4 border rounded-2xl"
          >
            <option value="KYC_VERIFIED">KYC Verified</option>
            <option value="ACCREDITED_INVESTOR">Accredited Investor</option>
            <option value="PROFESSIONAL">Professional</option>
          </select>
        </div>

        <button
          onClick={handleIssue}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl text-lg font-semibold mt-4"
        >
          Issue Credential
        </button>
      </div>
    </div>
  );
}