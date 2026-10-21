# x402-crypto-data-example

Minimal example of an AI agent paying **per call** for crypto market data with [x402](https://www.x402.org/) (HTTP 402 + USDC on Base). There's no signup and no API key.

API: `https://astra-x402-data.astratc.workers.dev` (catalog at `/`, free)

| Endpoint | Price |
|---|---|
| `GET /v1/coin?id=bitcoin` | $0.01 |
| `GET /v1/snapshot` (top-100, F&G, breadth, movers) | $0.05 |
| `GET /v1/brief` (daily brief, markdown) | $0.25 |

```bash
npm install
node check.mjs bitcoin                       # free: prints the 402 price
AGENT_PRIVATE_KEY=0x... node price.mjs bitcoin  # pays $0.01, prints data + receipt
```

Use a dedicated test wallet with a few cents of USDC on Base. Never use your main key. Add your own per-task spending cap in your agent.

Walkthrough: see the dev.to article linked in this repo's description. Docs for agents: https://astratc.github.io/llms.txt

Data is information only, not financial advice. MIT licensed.
