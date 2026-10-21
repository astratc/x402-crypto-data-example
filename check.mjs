// Free: shows the x402 payment requirements without paying anything.
const BASE = "https://astra-x402-data.astratc.workers.dev";
const res = await fetch(`${BASE}/v1/coin?id=${process.argv[2] || "bitcoin"}`);
console.log("status", res.status);
const body = await res.json();
for (const a of body.accepts ?? []) console.log(`price: $${Number(a.maxAmountRequired) / 1e6} USDC on ${a.network} -> ${a.payTo}`);
