'use client';

import ContractAddress from './ContractAddress';

export default function MigrationModal() {

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
              <div
                className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: '80px', height: '80px', fontSize: '36px' }}
              >
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3 className="h3 fw-bold mb-2" id="changeModalLabel">GERD Token Contract Migration</h3>
              <p className="text-muted mb-0">May 31, 2025</p>
            </div>

            <div className="alert alert-info border-info mb-4">
              <p className="mb-0">
                <i className="fas fa-info-circle me-2"></i>
                We&apos;ve upgraded the GERD Token smart contract to a new, more secure and immutable version.
              </p>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <ContractAddress
                  address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                  label="New Contract"
                />
              </div>
              <div className="col-md-6">
                <ContractAddress
                  address="0x660941bb4AA9FcBED00375673D21088A9d0C5019"
                  label="Legacy Contract"
                  isLegacy={true}
                  borderColor="#ffc107"
                />
              </div>
            </div>

            <div className="alert alert-warning border-warning mb-4">
              <p className="mb-2">
                <i className="fas fa-exclamation-triangle me-2"></i>
                The migration fixes a minor risk in the old contract&apos;s allowance logic. No exploit occurred, and no tokens were lost.
              </p>
              <p className="mb-0">
                See <a href="/migration-announcement" className="text-decoration-none fw-bold">Migration Announcement</a> for more details.
              </p>
            </div>

            <div className="alert alert-success border-success mb-4">
              <p className="mb-0">
                <i className="fas fa-check-circle me-2"></i>
                <strong>Please update any saved contract references to the new address.</strong>
              </p>
            </div>

            <div className="text-center mb-4">
              <a
                href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                <i className="fas fa-external-link-alt me-2"></i>View on BscScan
              </a>
            </div>

            <div className="text-center">
              <div
                className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: '48px', height: '48px', fontSize: '24px' }}
              >
                <i className="fas fa-heart"></i>
              </div>
              <p className="fw-bold mb-0">Thank you for your continued trust and support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

