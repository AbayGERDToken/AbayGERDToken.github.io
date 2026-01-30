/**
 * Wallet Generator for ETN Identity Users
 * Generates a deterministic BSC wallet address from ETN user ID
 * This ensures users without wallets can still claim GERD tokens
 */

import crypto from 'crypto';

/**
 * Generate a deterministic BSC wallet address from ETN user ID
 * Uses the user's ETN ID to derive a private key, then generates the corresponding address
 * 
 * @param etnUserId - The unique ETN user ID from id_token.sub or id_token.id
 * @returns Object containing BSC address and encrypted private key
 */
export function generateBSCWalletFromETNId(etnUserId: string): {
  address: string;
  encryptedPrivateKey: string;
} {
  // Use HMAC-SHA256 to derive a deterministic private key from the ETN user ID
  // The secret should be a strong, unique value stored securely
  const secret = process.env.WALLET_DERIVATION_SECRET || 'gerd-token-wallet-derivation-v1';
  
  // Create a deterministic seed from the user ID
  const seed = crypto.createHmac('sha256', secret)
    .update(etnUserId)
    .digest();
  
  // Generate private key (32 bytes for secp256k1)
  const privateKey = crypto.createHash('sha256')
    .update(seed)
    .digest();
  
  // Generate public key from private key using secp256k1
  const { publicKeyCreate } = require('secp256k1');
  const publicKey = publicKeyCreate(privateKey, false); // uncompressed format
  
  // Generate Ethereum address from public key
  // Address is the last 20 bytes of keccak256(publicKey[1:])
  const { keccak256 } = require('ethereum-cryptography/keccak');
  const hash = keccak256(publicKey.slice(1)); // Remove first byte (0x04 prefix)
  const address = '0x' + Buffer.from(hash.slice(-20)).toString('hex');
  
  // Encrypt the private key for storage (AES-256-GCM)
  const encryptedPrivateKey = encryptPrivateKey(privateKey.toString('hex'), etnUserId);
  
  return {
    address: address,
    encryptedPrivateKey: encryptedPrivateKey,
  };
}

/**
 * Encrypt a private key for secure storage
 * Uses AES-256-GCM with the user's ETN ID as additional authenticated data
 */
function encryptPrivateKey(privateKeyHex: string, etnUserId: string): string {
  const secret = process.env.WALLET_ENCRYPTION_SECRET || 'gerd-token-encryption-key-v1';
  const key = crypto.scryptSync(secret, 'salt', 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  
  cipher.setAAD(Buffer.from(etnUserId, 'utf8'));
  
  let encrypted = cipher.update(privateKeyHex, 'hex', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  // Return: iv:authTag:encryptedData
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

/**
 * Decrypt a private key (for future wallet export functionality)
 * This is kept for completeness but should only be used when user explicitly requests key export
 */
export function decryptPrivateKey(encryptedData: string, etnUserId: string): string {
  const secret = process.env.WALLET_ENCRYPTION_SECRET || 'gerd-token-encryption-key-v1';
  const key = crypto.scryptSync(secret, 'salt', 32);
  
  const parts = encryptedData.split(':');
  const iv = Buffer.from(parts[0], 'hex');
  const authTag = Buffer.from(parts[1], 'hex');
  const encrypted = parts[2];
  
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAAD(Buffer.from(etnUserId, 'utf8'));
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(encrypted, 'hex', 'hex');
  decrypted += decipher.final('hex');
  
  return decrypted;
}

/**
 * Validate that an address is a valid Ethereum/BSC address format
 */
export function isValidBSCAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
