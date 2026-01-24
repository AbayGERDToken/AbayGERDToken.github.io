# Security Policy

## Supported Versions

The Abay GERD Token project maintains multiple smart contracts and supporting services. Security updates are provided **only** for the versions listed below.

| Component / Version                              | Supported |
|--------------------------------------------------|-----------|
| GERD Token (Mainnet) – v2.x (BSC)                | ✅ Yes    |
| GERD Vesting Contract (Immutable, Mainnet)       | ✅ Yes    |
| GERD Vesting Contract (BSC Testnet – latest)     | ✅ Yes    |
| Frontend (abaygerdtoken.com – current release)   | ✅ Yes    |
| Backend Services (Flask / Python – current)      | ✅ Yes    |
| Legacy GERD Token Contracts (pre-v2, 2023)       | ❌ No     |
| Deprecated Testnet Builds / Experiments          | ❌ No     |

> **Note:**  
> Unsupported versions will **not** receive security patches. Use them only for historical reference.

---

## Reporting a Vulnerability

The Abay GERD Token project takes security seriously and encourages **responsible disclosure**.

### How to Report
If you discover a security vulnerability, **do not open a public GitHub issue**.

Instead, report it privately using **one** of the following methods:

- **Email:** `security@abaygerdtoken.com`
- **GitHub:** Open a *private security advisory* via GitHub’s Security tab
- **Telegram (last resort):** Contact an official admin and request secure contact details

### What to Include
Please provide as much detail as possible:
- A clear description of the vulnerability
- Affected contract(s), file(s), or endpoint(s)
- Steps to reproduce (if applicable)
- Potential impact (funds at risk, denial of service, etc.)
- Any proof-of-concept code or transaction hashes

### Response Timeline
- **Acknowledgement:** within **48 hours**
- **Initial assessment:** within **5 business days**
- **Status updates:** at least once every **7 days** until resolution

### Disclosure Policy
- If the report is **accepted**, we will coordinate a fix and disclosure timeline.
- If the report is **declined**, we will explain why.
- Public disclosure should **only occur after** a fix is deployed or mutually agreed upon.

### Safe Harbor
We support **good-faith security research**.  
We will not pursue legal action against researchers who:
- Act responsibly
- Avoid exploiting the issue beyond proof-of-concept
- Do not disrupt users or compromise funds
- Follow this disclosure policy

---

## Scope

In-scope targets include:
- GERD ERC-20 smart contracts
- Vesting, airdrop, and staking contracts
- Backend APIs and claim services
- Official frontend deployments
- Wallet-interaction logic

Out-of-scope examples:
- Phishing sites or third-party services
- Social engineering attacks
- Issues in user-controlled wallets or devices
- DoS attacks requiring unrealistic traffic volumes

---

## Acknowledgements

Valid security reports may be acknowledged publicly (with permission) in:
- Release notes
- Audit acknowledgements
- Project documentation

Thank you for helping keep the GERD ecosystem secure.
