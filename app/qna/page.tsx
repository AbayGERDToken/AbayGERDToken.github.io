import Image from 'next/image';

export default function QnA() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-question-circle me-3"></i>QnA: Frequently Asked Questions
                </h1>
                <p className="lead fs-5 opacity-90">
                  Get answers to common questions about token rewards, vesting, and the GERD Token ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Rewards Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="h3 fw-bold mb-5 text-center">
                <i className="fas fa-gift text-success me-2"></i>Why Are Token Rewards Different by Region?
              </h2>
              
              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-flag text-danger me-2"></i>Why do Ethiopia originated wallets receive 75,000 GERD while others get 10,000 GERD tokens?
                  </h3>
                  <p className="mb-0">
                    The Abay GERD Token was created as a tribute to the people of Ethiopia who collectively funded and built the Grand Renaissance Dam without external aid. This project represents unity, self-determination, and national pride. As such, Ethiopia is at the heart of this initiative and receive the highest reward.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-globe text-primary me-2"></i>Why does the rest of the world receive 10,000 GERD?
                  </h3>
                  <p className="mb-0">
                    Global participants are essential to the success of any decentralized project. We welcome and appreciate your support. The 10,000 GERD reward reflects both inclusivity and our commitment to keeping the token&apos;s value sustainable while prioritizing communities most directly connected to the project&apos;s origin.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-balance-scale text-warning me-2"></i>Isn&apos;t this unfair or discriminatory?
                  </h3>
                  <p className="mb-0">
                    Not at all. This is mission-aligned distribution, not exclusion. Every user, regardless of region or background, is eligible to receive tokens and participate freely. The distribution structure ensures that those who contributed to building the foundation—including the unbanked and less privileged individuals who played a vital role in constructing the dam—are recognized and empowered in proportion to their efforts. The goal is not only fairness, but also long-term value creation for the communities that made this project possible.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-exchange-alt text-success me-2"></i>Will I still be able to trade or earn more GERD tokens?
                  </h3>
                  <p className="mb-0">
                    Yes. GERD tokens will remain tradable for all users worldwide. Once 10,000 wallets have successfully claimed tokens and the token is listed on a centralized exchange (CEX), users will also be eligible to participate in future rewards, airdrops, and community-driven initiatives.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Vesting Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="h3 fw-bold mb-5 text-center">
                <i className="fas fa-book text-success me-2"></i>Understanding Vesting in Simple Terms
              </h2>
              
              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-lock text-primary me-2"></i>What is &quot;vesting&quot; and why should I care?
                  </h3>
                  <p className="mb-0">
                    Vesting is a way to release tokens in small, scheduled portions over time instead of giving them all out at once. For the GERD Token, vesting means exactly <strong>1 billion tokens</strong> will be released every year for the next <strong>115 years</strong>. This creates long-term stability and prevents anyone from dumping a huge amount of tokens on the market, which could hurt the value. It also rewards committed community members who stick around.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-user-shield text-info me-2"></i>Who controls the tokens right now?
                  </h3>
                  <p className="mb-0">
                    As of now, <strong>115 billion GERD tokens</strong> are still in a wallet controlled by a single human. They are waiting for the vesting system (smart contract) to go live on the blockchain. While there is trust in that person, it&apos;s important to remove human control entirely — which is what vesting will achieve once deployed. After that point, not even the original creator can move or spend those tokens outside the vesting schedule.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-robot text-success me-2"></i>What happens when the vesting contract goes live?
                  </h3>
                  <p className="mb-0">
                    Once deployed, the 115 billion tokens will be transferred to a secure, decentralized program called a <strong>smart contract</strong> — which acts like a <strong>virtual ATM machine</strong>. This ATM will only release tokens once per year, no earlier, no later. It&apos;s fully automatic, tamper-proof, and can&apos;t be changed or stopped. It&apos;s like programming a robot with one simple job and then throwing away the remote.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-chart-pie text-warning me-2"></i>How are those 1 billion tokens used every year?
                  </h3>
                  <p className="mb-3">Each year, when 1 billion GERD tokens are released:</p>
                  <div className="row g-3 mb-3">
                    <div className="col-md-4">
                      <div className="bg-success-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-parachute-box text-success me-2"></i>500 million GERD
                        </p>
                        <small className="text-muted">Divided and sent to all holders</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-warning-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-coins text-warning me-2"></i>250 million GERD
                        </p>
                        <small className="text-muted">Used for staking rewards</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-info-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-fire text-info me-2"></i>250 million GERD
                        </p>
                        <small className="text-muted">To liquidity or burned</small>
                      </div>
                    </div>
                  </div>
                  <p className="mb-0">This structure supports long-term health, rewards active holders, and avoids inflation.</p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-equals text-primary me-2"></i>Will everyone get the same amount?
                  </h3>
                  <p className="mb-0">
                    Yes, the 500 million tokens for holders are shared <strong>equally</strong> — not based on how much GERD you hold. Every wallet that holds any amount of GERD will receive the same fixed amount during each yearly release. For example, if 1 million wallets are holding GERD at the time of the release, each one will receive 500 GERD. If only 100 wallets are holding GERD, each one gets 5 million GERD. So, the earlier you become a holder, the more you&apos;ll receive — because there are fewer wallets to split the 500 million.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-ban text-danger me-2"></i>Can anyone stop or change this system later?
                  </h3>
                  <p className="mb-0">
                    Absolutely not. Once the tokens are inside the vesting smart contract, they are <strong>locked forever</strong>. No person, organization, or developer can access them outside of the yearly schedule. This is the power of decentralized blockchain technology — it removes human risk and guarantees that the rules are enforced automatically, forever.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-users text-success me-2"></i>Why is this good for the community?
                  </h3>
                  <p className="mb-0">
                    This system removes the need to trust any individual. It guarantees fairness, ensures that no one can cheat or take more than their share, and makes sure that token rewards are distributed every year for over a century. It&apos;s a long-term, transparent way to support the growth of the community, provide predictable rewards, and prevent surprises. This is about creating digital wealth that lasts across generations.
                  </p>
                </div>
              </div>

              <div className="card qa-card border-success">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-lightbulb text-warning me-2"></i>So what should I do now?
                  </h3>
                  <p className="mb-0">
                    Just make sure you hold GERD tokens in your own wallet (not on an exchange) before each yearly release. If you&apos;re holding at the right time, you&apos;ll automatically receive your share of the 500 million tokens for that year. No need to claim anything or pay extra — it&apos;s all handled by the smart contract. Easy, secure, and fair.
                  </p>
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
