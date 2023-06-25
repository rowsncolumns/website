import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

const secret = "rowsncolumns-license";

const generateLicenseCode = async (userId: string) => {
  const licenseKey = `${userId}-${secret}`; // Combine user ID and email
  const encoder = new TextEncoder();
  const data = encoder.encode(licenseKey);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data); // Generate SHA-256 hash of the license key
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join(""); // Convert the hash buffer to hexadecimal string
  const formattedLicenseCode = formatLicenseCode(hash); // Format the license code
  return `${userId}-${formattedLicenseCode}`;
};

const formatLicenseCode = (hash: string) => {
  const formattedHash = hash.replace(/(.{4})/g, "$1-"); // Add a hyphen after every 4 characters
  const licenseCode = formattedHash.slice(0, formattedHash.length - 1); // Remove the trailing hyphen
  return licenseCode;
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId") as string;
  const license = await generateLicenseCode(userId);
  return NextResponse.json({ license });
}
