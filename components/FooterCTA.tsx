import Image from 'next/image';

type FooterCTAProps = {
  headingLevel?: 'h4' | 'h5';
  showIcons?: boolean;
  title?: string;
};

export default function FooterCTA({ headingLevel = 'h5', showIcons = false, title }: FooterCTAProps) {
  const HeadingTag = headingLevel as 'h4' | 'h5';
  const headingClass = headingLevel === 'h4' ? 'h4 mb-3' : 'h5 mb-3';

  const defaultStart = 'DISCOVER ABAY GERD TOKEN, THE ETHIOPIAN-BORN DIGITAL ASSET EMPOWERING OUR COMMUNITY.';
  const defaultEnd = 'JOIN US IN CREATING A BRIGHTER FUTURE!';
  const hashtags = '#ABAYGERDTOKEN #ETHIOPIA #CRYPTO #GERD';

  return (
    <section className="bg-success-subtle py-5 mb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <HeadingTag className={headingClass}>
              {title ? (
                title
              ) : (
                <>
                  {defaultStart} {defaultEnd}{' '}
                  {showIcons && (
                    <>
                      <i className="fas fa-earth-americas text-primary"></i>{' '}
                      <i className="fas fa-coins text-warning"></i>{' '}
                    </>
                  )}
                  {hashtags}
                </>
              )}
            </HeadingTag>
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
  );
}
