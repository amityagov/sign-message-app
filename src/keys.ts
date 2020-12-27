// https://github.com/diafygi/webcrypto-examples

import { str2ab } from "./string-utils";

export const generateKey = async (): Promise<CryptoKeyPair> => {
  const key = await crypto.subtle.generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["sign", "verify"]
  );

  return key;
};

export const exportKey = async (key: CryptoKey): Promise<JsonWebKey> => {
  return await window.crypto.subtle.exportKey("jwk", key);
};

export const sign = async (data: string, privateKey: CryptoKey) => {
  const buffer = str2ab(data);

  await window.crypto.subtle.sign(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    privateKey,
    buffer
  )
};

export const verify = async (data: string, signature: string, publicKey: CryptoKey): Promise<boolean> => {
  const signatureBuffer = str2ab(signature);
  const dataBuffer = str2ab(data);

  return await window.crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    publicKey,
    signatureBuffer,
    dataBuffer
  )
};

export const createKeyName = (x: string, y: string) => {
  return `${x}/${y}`;
};
