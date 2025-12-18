import Image from 'next/image';
import ContractAddress from '@/components/ContractAddress';
import LocalizedText from '@/components/LocalizedText';

export default function BaseWallet() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-wallet me-3"></i>
                  <LocalizedText id="base_wallet.hero.title" tag="span" />
                </h1>
                <p className="lead fs-5 opacity-90">
                  <LocalizedText id="base_wallet.hero.lead" tag="span" />
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
                        <i className="fas fa-download text-success me-2"></i>
                        <LocalizedText id="base_wallet.steps.step1.title" tag="span" />
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-0">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          For Android and iOS users: Visit the{' '}
                          <a href="https://www.coinbase.com/wallet" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold">
                            Base Wallet website <i className="fas fa-external-link-alt ms-1 small"></i>
                          </a>{' '}
                          and follow the platform-specific install instructions
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
                        <i className="fas fa-cog text-success me-2"></i>
                        <LocalizedText id="base_wallet.steps.step2.title" tag="span" />
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Open the Base Wallet app on your device
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
                        <i className="fas fa-file-contract text-success me-2"></i>
                        <LocalizedText id="base_wallet.steps.step3.title" tag="span" />
                      </h2>
                      <ul className="list-unstyled mb-3">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>On the main screen, tap the search icon
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Top right corner 
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
                      <ContractAddress
                        address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                        label="GERD Contract Address"
                      />
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
                        <i className="fas fa-qrcode text-success me-2"></i>
                        <LocalizedText id="base_wallet.steps.step4.title" tag="span" />
                      </h2>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>Tap the GERD Token or Base icon
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
                    <h4 className="h6 fw-bold mb-1"><LocalizedText id="base_wallet.success.title" tag="span" /></h4>
                    <p className="mb-0">
                      <LocalizedText id="base_wallet.success.lead" tag="span" />
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
                <LocalizedText id="base_wallet.promo" tag="span" />
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
