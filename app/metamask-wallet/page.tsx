import Image from 'next/image';
import FooterCTA from '@/components/FooterCTA';
import ContractAddress from '@/components/ContractAddress';

export default function MetamaskWallet() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-wallet me-3"></i>MetaMask Wallet Setup
                </h1>
                <p className="lead fs-5 opacity-90">
                  Step-by-step guide for downloading MetaMask Wallet, importing the Abay GERD contract, and getting your GERD wallet address on the Binance Smart Chain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">

              {/* Step 1 */}
              <div className="card step-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-start">
                    <div className="step-number me-4">1</div>
                    <div className="flex-grow-1">
                      <h2 className="h4 fw-bold mb-3">
                        <i className="fas fa-download text-success me-2"></i>Download MetaMask Wallet
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          For desktop users: Visit the{' '}
                          <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold">
                            MetaMask website <i className="fas fa-external-link-alt ms-1 small"></i>
                          </a>{' '}
                          and choose the appropriate browser extension for Chrome, Firefox, Brave, or Edge. Follow the instructions to install the extension
                        </li>
                        <li className="mb-0">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          For mobile users: Visit the{' '}
                          <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold">
                            Google Play Store <i className="fas fa-external-link-alt ms-1 small"></i>
                          </a>{' '}
                          for Android or{' '}
                          <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold">
                            App Store <i className="fas fa-external-link-alt ms-1 small"></i>
                          </a>{' '}
                          for iOS to download the app
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="card step-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-start">
                    <div className="step-number me-4">2</div>
                    <div className="flex-grow-1">
                      <h2 className="h4 fw-bold mb-3">
                        <i className="fas fa-cog text-success me-2"></i>Set up MetaMask
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Open the MetaMask extension or app on your device
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Select &quot;Create a New Wallet&quot;
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Choose a strong password and accept the terms of use
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          Save your 12-word recovery phrase securely. <strong className="text-danger">Do not share it</strong>
                        </li>
                        <li className="mb-0">
                          <i className="fas fa-check-circle text-success me-2"></i>Confirm your recovery phrase and proceed to the dashboard
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="card step-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-start">
                    <div className="step-number me-4">3</div>
                    <div className="flex-grow-1">
                      <h2 className="h4 fw-bold mb-3">
                        <i className="fas fa-network-wired text-success me-2"></i>Add the Binance Smart Chain Network
                      </h2>
                      <ul className="list-unstyled mb-3">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Click the network dropdown at the top (default is &quot;Ethereum Mainnet&quot;)
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Select &quot;Custom RPC&quot; to add a new network
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Enter the following network details:
                        </li>
                      </ul>
                      <div className="network-info">
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><strong>Network Name:</strong> Binance Smart Chain</li>
                          <li className="mb-2"><strong>New RPC URL:</strong> <code>https://bsc-dataseed.binance.org/</code></li>
                          <li className="mb-2"><strong>Chain ID:</strong> <code>56</code></li>
                          <li className="mb-2"><strong>Currency Symbol:</strong> <code>BNB</code></li>
                          <li className="mb-0"><strong>Block Explorer URL:</strong> <code>https://bscscan.com</code></li>
                        </ul>
                      </div>
                      <p className="mt-3 mb-0">
                        <i className="fas fa-check-circle text-success me-2"></i>Click &quot;Save&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="card step-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-start">
                    <div className="step-number me-4">4</div>
                    <div className="flex-grow-1">
                      <h2 className="h4 fw-bold mb-3">
                        <i className="fas fa-file-contract text-success me-2"></i>Import the Abay GERD Contract
                      </h2>
                      <ul className="list-unstyled mb-3">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Click &quot;Add Token&quot; on the dashboard
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Select &quot;Custom Token&quot;
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Copy and paste the contract address below
                        </li>
                        <li className="mb-0">
                          <i className="fas fa-check-circle text-success me-2"></i>The rest should auto-fill. Click &quot;Next&quot; and &quot;Add Tokens&quot;
                        </li>
                      </ul>
                      <ContractAddress
                        address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                        label="GERD Contract Address"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="card step-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-start">
                    <div className="step-number me-4">5</div>
                    <div className="flex-grow-1">
                      <h2 className="h4 fw-bold mb-3">
                        <i className="fas fa-qrcode text-success me-2"></i>Get Your GERD Wallet Address
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Ensure Binance Smart Chain is selected
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Your address appears under your account name. Tap to copy
                        </li>
                        <li className="mb-0">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          Use this address to receive GERD tokens. <strong className="text-danger">Never share your private key or recovery phrase</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Alert */}
              <div className="alert alert-success border-0 shadow-sm">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', fontSize: '24px' }}
                  >
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="h6 fw-bold mb-1">You&apos;re All Set!</h4>
                    <p className="mb-0">
                      You can now manage your GERD tokens using MetaMask. You&apos;ll need a small amount of BNB for gas fees to send tokens. Receiving is free.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
