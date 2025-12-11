export default function ClaimUpdateModal() {
  return (
    <div 
      className="modal fade" 
      id="changeModal" 
      tabIndex={-1} 
      aria-labelledby="changeModalLabel" 
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body px-4 pb-4">
            <div className="text-center mb-4">
              <h3 className="h3 fw-bold mb-2" id="changeModalLabel">
                <i className="fas fa-gift"></i> GERD Token Claim Update
              </h3>
              <p className="text-muted mb-0">Starting May 5, 2025</p>
            </div>

            <div className="alert alert-info border-info mb-4">
              <p className="mb-0">
                <i className="fas fa-info-circle me-2"></i>Increase in the total amount of GERD Tokens available for claiming:
              </p>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="card border-primary h-100">
                  <div className="card-body p-4 text-center">
                    <h4 className="h6 fw-bold mb-2"><i className="fas fa-globe"></i> Global Claim</h4>
                    <div className="mb-2">
                      <div className="h5 text-muted mb-0">1,000 GERD</div>
                    </div>
                    <div className="mb-0">
                      <i className="fas fa-arrow-down text-primary mb-2 d-block"></i>
                      <div className="h4 fw-bold text-primary mb-0">10,000 GERD</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-danger h-100">
                  <div className="card-body p-4 text-center">
                    <h4 className="h6 fw-bold mb-2">🇪🇹 Ethiopia-Specific Claim</h4>
                    <div className="mb-2">
                      <div className="h5 text-muted mb-0">7,500 GERD</div>
                    </div>
                    <div className="mb-0">
                      <i className="fas fa-arrow-down text-danger mb-2 d-block"></i>
                      <div className="h4 fw-bold text-danger mb-0">75,000 GERD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-success border-success mb-4">
              <div className="d-flex align-items-start">
                <div 
                  className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3" 
                  style={{ width: '40px', height: '40px', fontSize: '20px', flexShrink: 0 }}
                >
                  <i className="fas fa-gift"></i>
                </div>
                <div>
                  <h5 className="h6 fw-bold mb-2">10x Airdrop Bonus for Early Claimers!</h5>
                  <p className="mb-2">
                    <strong>Wallets that have previously claimed before the increase</strong> will receive a <strong>10x airdrop bonus</strong> based on their original claim amount.
                  </p>
                  <p className="mb-0">
                    <em>Example: If you previously claimed 1,000 GERD, you will receive 10,000 GERD via airdrop on 05/05/2025.</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div 
                className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                style={{ width: '48px', height: '48px', fontSize: '24px' }}
              >
                <i className="fas fa-heart"></i>
              </div>
              <p className="fw-bold mb-0">Thank you for supporting the GERD mission!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





