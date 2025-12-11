import Image from 'next/image';
import CopyButton from '@/components/CopyButton';

export default function TrustWallet() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-wallet me-3"></i>Trust Wallet Setup
                </h1>
                <p className="lead fs-5 opacity-90">
                  Step-by-step guide for downloading Trust Wallet, importing the Abay GERD contract, and getting your GERD wallet address on the Binance Smart Chain
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
                        <i className="fas fa-download text-success me-2"></i>Download Trust Wallet
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          For Android users: Visit the{' '}
                          <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold">
                            Google Play Store <i className="fas fa-external-link-alt ms-1 small"></i>
                          </a>{' '}
                          and install the app
                        </li>
                        <li className="mb-0">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          For iOS users: Visit the{' '}
                          <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold">
                            App Store <i className="fas fa-external-link-alt ms-1 small"></i>
                          </a>{' '}
                          and install the app
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
                        <i className="fas fa-cog text-success me-2"></i>Set up Trust Wallet
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Open the Trust Wallet app on your device
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Select &quot;Create a New Wallet&quot; if you&apos;re new
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Accept the terms and conditions
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          Write down the 12-word recovery phrase in a secure location. <strong className="text-danger">Never share it</strong>
                        </li>
                        <li className="mb-0">
                          <i className="fas fa-check-circle text-success me-2"></i>Confirm the recovery phrase by selecting the words in order
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
                        <i className="fas fa-file-contract text-success me-2"></i>Import the Abay GERD Contract
                      </h2>
                      <ul className="list-unstyled mb-3">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>On the main screen, tap the &quot;+&quot; icon to add a custom token
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Select &quot;BNB Smart Chain&quot; as the network
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Copy and paste the contract address below
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Other fields (Name, Symbol, Decimals) should auto-fill
                        </li>
                        <li className="mb-0">
                          <i className="fas fa-check-circle text-success me-2"></i>Tap &quot;Save&quot; or &quot;Add&quot;
                        </li>
                      </ul>
                      <div className="contract-box">
                        <p className="mb-2 small text-muted">
                          <i className="fas fa-info-circle me-2"></i>GERD Contract Address:
                        </p>
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          <code 
                            className="text-success fw-bold fs-6 text-break flex-grow-1" 
                            style={{ wordBreak: 'break-all', minWidth: 0 }}
                          >
                            0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c
                          </code>
                          <CopyButton address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c" className="flex-shrink-0" />
                        </div>
                      </div>
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
                        <i className="fas fa-qrcode text-success me-2"></i>Get Your GERD Wallet Address
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Tap the GERD Token or BNB Smart Chain icon
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Tap &quot;Receive&quot; or the QR icon to display your address
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
                      You can now manage your GERD tokens using Trust Wallet. Remember: you&apos;ll need a small amount of BNB for gas fees when sending tokens, but receiving is free.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-success-subtle py-5 mb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="h5 mb-3">
                DISCOVER ABAY GERD TOKEN, THE ETHIOPIAN-BORN CRYPTOCURRENCY EMPOWERING OUR COMMUNITY AND SUPPORTING THE GRAND ETHIOPIAN RENAISSANCE DAM PROJECT.
                JOIN US IN CREATING A BRIGHTER FUTURE! #ABAYGERDTOKEN #ETHIOPIA #CRYPTO #GERD
              </h2>
            </div>
            <div className="col-md-4 text-center">
              <Image 
                src="/image/abay_bluesky.png" 
                alt="AbayGERDToken" 
                className="img-fluid img-hero"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
