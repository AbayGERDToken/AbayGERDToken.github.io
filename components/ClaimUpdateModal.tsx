import LocalizedText from './LocalizedText';

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
                <i className="fas fa-gift"></i> <LocalizedText id="claim_update.title" tag="span" />
              </h3>
              <LocalizedText id="claim_update.date" tag="p" className="text-muted mb-0" />
            </div>

            <div className="alert alert-info border-info mb-4">
              <p className="mb-0">
                <i className="fas fa-info-circle me-2"></i><LocalizedText id="claim_update.info" tag="span" />
              </p>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="card border-primary h-100">
                  <div className="card-body p-4 text-center">
                    <h4 className="h6 fw-bold mb-2"><i className="fas fa-globe"></i> <LocalizedText id="claim_update.global_title" tag="span" /></h4>
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
                    <h4 className="h6 fw-bold mb-2">🇪🇹 <LocalizedText id="claim_update.ethiopia_title" tag="span" /></h4>
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
                  <LocalizedText id="claim_update.airdrop_lead" tag="h5" className="h6 fw-bold mb-2" />
                  <LocalizedText id="claim_update.airdrop_body" tag="p" className="mb-2" />
                  <LocalizedText id="claim_update.airdrop_example" tag="p" className="mb-0" />
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
              <LocalizedText id="claim_update.thanks" tag="p" className="fw-bold mb-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





