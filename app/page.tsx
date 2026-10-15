'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, Menu, X, Briefcase, Mail, MapPin, Building2, ExternalLink, UtensilsCrossed } from 'lucide-react'

function FacebookIcon({ size = 16, style, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const companies = [
  {
    name: 'Circle Network',
    industry: 'High-Speed Internet (ISP)',
    description: 'Fast and reliable fiber optic internet for homes, schools, and offices across Bangladesh.',
    logo: '/companies/Circle Network.webp',
    link: 'https://circlenetworkbd.net',
    featured: true,
  },
  {
    name: 'Windstream Communications Ltd.',
    industry: 'International Internet Gateway (IIG)',
    description: 'Licensed International Internet Gateway (IIG) providing high-capacity bandwidth, data transmission, and corporate network connectivity.',
    logo: '/companies/Windstream Communications Limited.webp',
    link: 'https://www.windstreamcommunication.net/',
    featured: false,
  },
  {
    name: 'Circle Enterprise',
    industry: 'IT & Software Solutions',
    description: 'Practical computer systems, software tools, and tech support that help local businesses run smoothly.',
    logo: '/companies/Circle Enterprise.webp',
    featured: false,
  },
  {
    name: 'Circle Food & Beverage',
    industry: 'Restaurants & Hospitality',
    description: 'Fresh food, tasty drinks, and friendly dining places made for families and friends to enjoy together.',
    logo: '/companies/Circle Food & Beverage.webp',
    featured: false,
  },
  {
    name: 'Parle Bangladesh',
    industry: 'Packaged Food & Snacks',
    description: 'Supplying popular, trusted biscuits, snacks, and everyday food items to retail shops all over Bangladesh.',
    logo: '/companies/Parle Bangladesh.webp',
    link: 'https://parlebangladesh.com/',
    featured: false,
  },
  {
    name: 'Universe Interiors Ltd.',
    industry: 'Home & Office Interiors',
    description: 'Designing and building beautiful, modern, and comfortable spaces for homes and corporate workplaces.',
    logo: '/companies/Universe Interiors Ltd.webp',
    link: 'https://universeinteriors.com/',
    featured: false,
  },
  {
    name: 'Infinity Engineering',
    industry: 'Engineering & Factory Services',
    description: 'Technical support, machinery maintenance, and practical engineering solutions for local industries.',
    logo: '/companies/Infinity Engineering.webp',
    featured: false,
  },
  {
    name: 'M/S. Farid Enterprise',
    industry: 'Govt. Contractor & Order Supplier',
    description: 'Trusted government contractor and commercial order supplier, providing reliable material procurement, hardware goods, and project supply across Bangladesh.',
    logo: '/companies/MS Farid Enterprise.webp',
    featured: false,
  },
]

const timeline = [
  {
    period: 'Present',
    title: 'Chief Executive Officer (CEO)',
    organization: 'Circle Network',
    logo: '/companies/Circle Network.webp',
    description: 'Leading our team to bring fast, dependable fiber internet to thousands of homes and offices across Bangladesh.',
    current: true,
  },
  {
    period: '2025 — 2027',
    title: 'Joint Secretary General',
    organization: 'ISPAB (Internet Service Providers Association of Bangladesh)',
    logo: '/logos/ispab.webp',
    description: 'Elected by fellow internet providers to help make internet services faster, cheaper, and more accessible for all citizens.',
    current: false,
  },
  {
    period: 'Previous Role',
    title: 'Leadership & Strategic Operations',
    organization: 'Windstream Communications Limited',
    logo: '/companies/Windstream Communications Limited.webp',
    description: 'Hands-on leadership experience in telecommunications, International Internet Gateway (IIG) infrastructure, and corporate data connectivity.',
    current: false,
  },
  {
    period: 'Education',
    title: 'Creative Studies & Business Foundations',
    organization: 'Shanto-Mariam University of Creative Technology',
    logo: '/logos/shanto-mariam.webp',
    description: 'Where I learned creative problem-solving and built the determination to start my own businesses.',
    current: false,
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      {/* Navigation Header */}
      <header className="site-header">
        <a href="#top" className="wordmark" onClick={closeMenu}>
          <span className="wordmark-name">Mahbub Alam Razu</span>
          <span className="wordmark-sub">CEO &amp; Entrepreneur</span>
        </a>

        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#leadership" className="nav-link" onClick={closeMenu}>Leadership</a>
          <a href="#companies" className="nav-link" onClick={closeMenu}>Companies</a>
          <a href="#journey" className="nav-link" onClick={closeMenu}>Journey</a>
          <a href="#moments" className="nav-link" onClick={closeMenu}>Moments</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Get in Touch <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-badge">
            <Building2 size={14} />
            <span>CEO · Circle Network</span>
          </div>
          <h1 className="hero-title">
            Building <em>Businesses.</em><br />
            Helping People Grow.
          </h1>
          <p className="hero-subtitle">
            Hi, I am Mahbub Alam Razu, an entrepreneur from Bangladesh. As CEO of Circle Network, I lead teams that connect thousands of homes and offices with fast internet. Across my 8 companies, we are proud to provide jobs for more than 2,000 hardworking people.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#companies">
              See My Companies <ArrowDownRight size={16} />
            </a>
            <a className="btn-secondary" href="#about">
              About My Work <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {/* Portrait with transparent background - no box or card background color */}
          <div className="hero-portrait-card">
            <Image
              src="/profile.webp"
              alt="Mahbub Alam Razu, CEO of Circle Network"
              fill
              priority
              sizes="(max-width: 800px) 90vw, 480px"
            />
          </div>

          {/* Social connect bar placed at the bottom of his picture */}
          <div className="hero-social-bar">
            <span className="hero-social-label">Connect with me:</span>
            <a
              href="https://www.facebook.com/Razumahbub"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="Connect with Mahbub Alam Razu on Facebook"
            >
              <FacebookIcon size={16} />
              <span>Facebook</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Key Numbers / Simple Credibility Strip */}
      <section className="credibility-section">
        <div className="credibility-strip">
          <div className="cred-item">
            <div className="cred-number">13<span>+</span></div>
            <div className="cred-label">Years of building businesses</div>
          </div>
          <div className="cred-item">
            <div className="cred-number">2,000<span>+</span></div>
            <div className="cred-label">Team members working together</div>
          </div>
          <div className="cred-item">
            <div className="cred-number">08</div>
            <div className="cred-label">Active companies in different fields</div>
          </div>
          <div className="cred-item">
            <div className="cred-number">ISPAB</div>
            <div className="cred-label">Joint Secretary General (2025–2027)</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-pad" id="about">
        <div className="about-grid">
          <div className="about-image-card">
            <Image
              src="/image (2).webp"
              alt="Mahbub Alam Razu on the ground working with teams"
              fill
              sizes="(max-width: 800px) 90vw, 420px"
            />
          </div>

          <div className="about-content">
            <div className="section-header" style={{ marginBottom: '24px' }}>
              <span className="section-tag">About Me</span>
              <h2 className="section-title">
                Working hard every day to <em>create real value.</em>
              </h2>
            </div>

            <p className="lead-text">
              I believe real success comes from working side by side with your team and solving real problems for everyday people.
            </p>

            <p className="body-text">
              For over 13 years, I have started and managed companies in internet, communications, food, home and office design, engineering, and trading. Headquartered in Dhaka, my goal has always been simple: build honest businesses, treat employees with respect, and help our country move forward.
            </p>

            <div className="about-pillars">
              <div className="pillar-card">
                <h4>Fast &amp; Reliable Internet</h4>
                <p>Bringing high-speed fiber internet to families, students, and businesses all over Bangladesh.</p>
              </div>
              <div className="pillar-card">
                <h4>Creating Good Jobs</h4>
                <p>Giving over 2,000 people stable jobs, fair training, and real opportunities to build their future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Business Spotlight */}
      <section className="flagship-section" id="leadership">
        <div className="flagship-wrapper">
          <div className="flagship-media">
            <Image
              src="/image (5).webp"
              alt="Mahbub Alam Razu at his desk in Circle Network office"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div className="flagship-media-badge">
              Circle Network · Executive Office
            </div>
          </div>

          <div className="flagship-body">
            <div className="flagship-logo-box">
              <Image
                src="/companies/Circle Network.webp"
                alt="Circle Network Official Logo"
                width={150}
                height={45}
                className="flagship-logo-img"
              />
            </div>

            <span className="flagship-tag">Main Company</span>
            <h2 className="flagship-title">
              Circle Network<br />
              <em>Connecting Bangladesh.</em>
            </h2>
            <p className="flagship-desc">
              Circle Network is my primary focus. We provide fast, dependable fiber optic internet to homes, small businesses, and large offices across the nation. In today&apos;s world, good internet means better education, growing businesses, and staying close to family. Our team works 24/7 to make sure your connection never lets you down.
            </p>

            <div className="flagship-role-box">
              <span>My Role</span>
              <strong>Chief Executive Officer (CEO)</strong>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://circlenetworkbd.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Visit circlenetworkbd.net <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                Contact My Office <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Portfolio */}
      <section className="section-pad" id="companies">
        <div className="section-header">
          <span className="section-tag">My Companies</span>
          <h2 className="section-title">
            Businesses built to serve <em>everyday needs.</em>
          </h2>
          <p className="section-desc">
            From high-speed internet and computer solutions to quality food and comfortable interiors, here are the companies I lead and support.
          </p>
        </div>

        <div className="companies-grid">
          {companies.map((company) => (
            <article
              key={company.name}
              className={company.featured ? 'company-card company-card-featured' : 'company-card'}
            >
              <div>
                {/* Official Company Logo */}
                {company.logo ? (
                  <div className="company-logo-wrap">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={160}
                      height={65}
                      className="company-logo-img"
                    />
                  </div>
                ) : (
                  <div className="company-logo-wrap" style={{ background: 'var(--accent-gold-bg)' }}>
                    <UtensilsCrossed size={30} style={{ color: 'var(--accent-gold)' }} />
                  </div>
                )}

                <div className="company-card-top">
                  <span className="company-industry-badge">{company.industry}</span>
                  <ArrowUpRight size={18} style={{ color: 'var(--accent-gold)' }} />
                </div>
                <h3 className="company-name">{company.name}</h3>
                <p className="company-desc">{company.description}</p>
                {company.link && (
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '14px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--accent-gold)',
                      textDecoration: 'none',
                    }}
                  >
                    Visit {company.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Leadership Journey */}
      <section className="section-pad" id="journey">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">
            Where I started and <em>how we got here.</em>
          </h2>
        </div>

        <div className="journey-layout">
          <div className="journey-aside">
            <p className="journey-quote">
              &ldquo;A good business is not about fancy words. It is about trusting your people, working hard every single day, and never giving up.&rdquo;
            </p>

            <div className="journey-visual-card">
              <div className="journey-thumb-wrap">
                <Image
                  src="/old-image.webp"
                  alt="Throwback of Mahbub Alam Razu in his early entrepreneurial days"
                  fill
                  sizes="80px"
                />
              </div>
              <div className="journey-thumb-caption">
                <strong>How It Started</strong>
                Starting over 13 years ago with big dreams, learning from every mistake, and building one step at a time.
              </div>
            </div>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div
                key={item.title}
                className={item.current ? 'timeline-item active' : 'timeline-item'}
              >
                <div className="timeline-left">
                  <div className="timeline-label">{item.period}</div>
                  {item.logo && (
                    <div className="timeline-logo-wrap">
                      <Image
                        src={item.logo}
                        alt={`${item.organization} logo`}
                        width={120}
                        height={40}
                        className="timeline-logo-img"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px', fontSize: '13px' }}>
                    {item.organization}
                  </p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Chronicle / Moments */}
      <section className="section-pad" id="moments">
        <div className="section-header">
          <span className="section-tag">Life &amp; Moments</span>
          <h2 className="section-title">
            A closer look at <em>my daily life.</em>
          </h2>
          <p className="section-desc">
            Behind every company is hard work, personal values, and moments that matter.
          </p>
        </div>

        <div className="moments-grid">
          <article className="moment-card">
            <div className="moment-img-wrap">
              <Image
                src="/image (5).webp"
                alt="Working at the office desk"
                fill
                sizes="(max-width: 800px) 100vw, 320px"
              />
            </div>
            <div className="moment-content">
              <span className="moment-tag">Daily Work</span>
              <h3 className="moment-title">In the Office</h3>
              <p className="moment-desc">Planning our next projects, meeting with managers, and making sure our network runs smoothly every day.</p>
            </div>
          </article>

          <article className="moment-card">
            <div className="moment-img-wrap">
              <Image
                src="/image (4).webp"
                alt="Talking and spending time with our team"
                fill
                sizes="(max-width: 800px) 100vw, 320px"
              />
            </div>
            <div className="moment-content">
              <span className="moment-tag">Our Team</span>
              <h3 className="moment-title">Listening &amp; Learning</h3>
              <p className="moment-desc">Spending time with our frontline team members, listening to their ideas, and building a supportive workplace.</p>
            </div>
          </article>

          <article className="moment-card">
            <div className="moment-img-wrap">
              <Image
                src="/image with son.webp"
                alt="Mahbub Alam Razu with his son Yassin Alam Araf"
                fill
                sizes="(max-width: 800px) 100vw, 320px"
              />
            </div>
            <div className="moment-content">
              <span className="moment-tag">Family &amp; Values</span>
              <h3 className="moment-title">With Son Yassin Alam Araf</h3>
              <p className="moment-desc">My family is my greatest blessing. Everything I build is to create a better world for my son Yassin and the next generation.</p>
            </div>
          </article>

          <article className="moment-card">
            <div className="moment-img-wrap">
              <Image
                src="/old-image.webp"
                alt="Early beginnings over 13 years ago"
                fill
                sizes="(max-width: 800px) 100vw, 320px"
              />
            </div>
            <div className="moment-content">
              <span className="moment-tag">Early Days</span>
              <h3 className="moment-title">Humble Beginnings</h3>
              <p className="moment-desc">Looking back at where I began over 13 years ago—reminding me to stay humble, thankful, and focused on helping others.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Leadership Philosophy (Symmetrically Centered) */}
      <div className="philosophy-container">
        <section className="philosophy-section">
          <div className="philosophy-header">
            <span className="section-tag" style={{ color: 'var(--accent-gold)' }}>What I Believe</span>
            <h2>
              Three simple rules that<br />
              <em>guide my work.</em>
            </h2>
          </div>

          <div className="principles-grid">
            <div className="principle-item">
              <span className="principle-tag">01 · Honest Direction</span>
              <h3>Speak Clearly &amp; Truthfully</h3>
              <p>Know where you are going, be honest with your team and customers, and make decisions that stand the test of time.</p>
            </div>
            <div className="principle-item">
              <span className="principle-tag">02 · Care for People</span>
              <h3>Respect Your Team</h3>
              <p>Treat every worker with dignity and fairness. When your employees succeed, your company succeeds.</p>
            </div>
            <div className="principle-item">
              <span className="principle-tag">03 · Build to Last</span>
              <h3>Focus on Real Value</h3>
              <p>Build services that people can truly depend on for years to come, instead of chasing quick short-term profits.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-card">
          <div className="contact-info">
            <span className="section-tag">Get in Touch</span>
            <h2>
              Let&apos;s talk and build<br />
              <em>something good together.</em>
            </h2>
            <p>
              If you have a business proposal, want to partner with Circle Network, or just want to say hello, feel free to reach out. I would love to hear from you.
            </p>
          </div>

          <div className="contact-actions">
            <a href="mailto:razu@circlenetworkbd.net" className="btn-primary">
              <Mail size={16} /> Send Direct Email
            </a>
            <a
              href="https://www.facebook.com/Razumahbub"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-link"
              title="Connect with Mahbub Alam Razu on Facebook"
            >
              <FacebookIcon size={16} style={{ color: '#1877f2' }} />
              <span>facebook.com/Razumahbub</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href="mailto:razu@circlenetworkbd.net"
              className="contact-direct-link"
              title="Direct Email"
            >
              <Mail size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>razu@circlenetworkbd.net</span>
            </a>
            <div className="contact-direct-link">
              <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>Dhaka, Bangladesh</span>
            </div>
            <a
              href="https://circlenetworkbd.net"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-link"
              title="Circle Network Official Website"
            >
              <Briefcase size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>Circle Network (circlenetworkbd.net)</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div>
            <span className="wordmark-name" style={{ fontSize: '18px' }}>Mahbub Alam Razu</span>
            <p style={{ marginTop: '4px', fontSize: '12px' }}>
              © {new Date().getFullYear()} Mahbub Alam Razu. All rights reserved.
            </p>
            <p style={{ marginTop: '6px', fontSize: '12px', color: 'var(--text-muted)' }}>
              💗 Made with Love by{' '}
              <a
                href="https://md-mohsin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-gold)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                Md. Mohsin
              </a>{' '}
              💗
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#leadership">Leadership</a>
            <a href="#companies">Companies</a>
            <a href="https://circlenetworkbd.net" target="_blank" rel="noopener noreferrer">Circle Network</a>
            <a href="https://www.facebook.com/Razumahbub" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="mailto:razu@circlenetworkbd.net">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
