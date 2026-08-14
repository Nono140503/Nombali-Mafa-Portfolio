import { getAssetUrl } from '../utils/projectData'
import './CommunityRecognition.css'

const communityItems = [
  {
    id: 'w3node',
    year: '2026',
    badge: '1ST PLACE WINNER',
    title: 'W3Node Node Engine 2026 — Gaming & Entertainment',
    organization: 'W3Node Ecosystem',
    description: 'Awarded 1st place for Spaza Tycoon, a Web3 business simulator built on Base inspired by South African informal retail.',
    image: 'assets/W3node.jpg',
    link: 'https://w3node.org/',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
      </svg>
    ),
    highlight: true
  },
  {
    id: 'girlcode-winner',
    year: '2023 & 2025',
    badge: 'REPEAT WINNER',
    title: 'GirlCode Hackathon Winner — 2023 & 2025',
    organization: 'GirlCode Africa',
    description: 'Repeat recognition for high-impact technical problem-solving, rapid prototyping, and collaborative software engineering.',
    image: 'assets/Girlcode.jpg',
    link: 'https://girlcode.co.za/',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    highlight: true
  },
  {
    id: 'shefi',
    year: 'Season 16',
    badge: 'SCHOLAR & ALUMNA',
    title: 'SheFi Scholar / Alumna, Season 16',
    organization: 'SheFi Global',
    description: 'Global education community focused on empowering women’s active participation in crypto, DeFi, and emerging technology.',
    image: 'assets/S16 Poster.png',
    link: 'https://www.shefi.org/',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
      </svg>
    )
  },
  {
    id: 'her-dao',
    year: '2025 - Present',
    badge: 'ECOSYSTEM MEMBER',
    title: 'H.E.R. DAO, South Africa',
    organization: 'H.E.R. DAO',
    description: 'Member of the women-led Web3 ecosystem builder community driving decentralized technology innovation across South Africa.',
    image: 'assets/her_dao-logo_-_black_-_light_mode_-_circle_c1rx6x.svg',
    link: 'https://www.herdao.com/',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
      </svg>
    )
  },
  {
    id: 'uj-tpc',
    year: '2024 - 2025',
    badge: 'LEADERSHIP',
    title: 'University of Johannesburg TPC Ambassador',
    organization: 'UJ Technopreneurship Centre',
    description: 'Technology leadership contribution representing UJ TPC, mentoring student developers and coordinating technical workshops.',
    image: 'assets/TPC.jpg',
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  }
]

const CommunityRecognition = () => {
  return (
    <section id="community" className="community-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center animate-fadeInUp">
          <div className="section-label">
            <span>04 // BEYOND THE BUILD</span>
          </div>
          <h2 className="section-title">
            Community & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="section-subtitle">
            Leadership contributions, hackathon awards, Web3 ecosystem affiliations, and technology advocacy.
          </p>
        </div>

        {/* Curated Grid Layout */}
        <div className="community-grid">
          {communityItems.map((item) => (
            <div 
              key={item.id} 
              className={`community-card glass-card ${item.highlight ? 'highlight-card' : ''}`}
            >
              {/* Media Image Header at Top of Card */}
              {item.image && (
                <div className="community-card-image-wrapper">
                  <img 
                    src={getAssetUrl(item.image)} 
                    alt={item.title} 
                    className="community-card-img"
                    loading="lazy"
                  />
                  <div className="community-image-overlay"></div>
                </div>
              )}

              <div className="community-card-inner">
                <div className="card-top">
                  <div className="card-icon-box">
                    {item.iconSvg}
                  </div>
                  <div className="badge-group">
                    <span className="year-pill">{item.year}</span>
                    <span className="status-badge">{item.badge}</span>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="item-title">{item.title}</h3>
                  <span className="org-label">{item.organization}</span>
                  <p className="item-desc">{item.description}</p>
                </div>

                {item.link && (
                  <div className="card-footer">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="org-link-btn"
                    >
                      <span>Visit {item.organization}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunityRecognition
