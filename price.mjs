// Paid: fetches one coin price for $0.01 USDC on Base via x402.
// Use a dedicated low-balance wallet. Needs USDC on Base, no ETH.
import { wrapFetchWithPayment, decodeXPaymentResponse } from "x402-fetch";
import { privateKeyToAccount } from "viem/accounts";

const BASE = "https://astra-x402-data.astratc.workers.dev";
const key = process.env.AGENT_PRIVATE_KEY;
if (!key) { console.error("Set AGENT_PRIVATE_KEY (test wallet only)."); process.exit(1); }

const fetchWithPay = wrapFetchWithPayment(fetch, privateKeyToAccount(key));
const res = await fetchWithPay(`${BASE}/v1/coin?id=${process.argv[2] || "bitcoin"}`);
console.log(await res.json());
const r = res.headers.get("x-payment-response");
if (r) console.log("receipt:", decodeXPaymentResponse(r));
