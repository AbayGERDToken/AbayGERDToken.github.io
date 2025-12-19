'use client';

import ContractAddress from './ContractAddress';
import LocalizedText from './LocalizedText';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function MigrationModal() {
  const t = useTranslations();
  const pathname = usePathname();
  const isAmharic = pathname.startsWith('/am');
  const migrationAnnouncementLink = isAmharic ? '/am/migration-announcement' : '/migration-announcement';

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
              <LocalizedText id="migration.title" tag="h3" className="h3 fw-bold mb-2" />
              <LocalizedText id="migration.date" tag="p" className="text-muted mb-0" />
            </div>

            <div className="alert alert-info border-info mb-4">
              <LocalizedText id="migration.why.body" tag="p" className="mb-0" />
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <ContractAddress
                  address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                  label={t('migration.contracts.new_label')}
                />
              </div>
              <div className="col-md-6">
                <ContractAddress
                  address="0x660941bb4AA9FcBED00375673D21088A9d0C5019"
                  label={t('migration.contracts.legacy_label')}
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
                See <a href={migrationAnnouncementLink} className="text-decoration-none fw-bold"><LocalizedText id="migration.announcement_link" tag="span" /></a> for more details.
              </p>
            </div>

            <div className="alert alert-success border-success mb-4">
              <p className="mb-0">
                <i className="fas fa-check-circle me-2"></i>
                <strong><LocalizedText id="migration.update_saved_contracts" tag="span" /></strong>
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
              <LocalizedText id="migration.thanks.lead" tag="p" className="fw-bold mb-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

