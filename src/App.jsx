import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => scrollTo('hero')}>olivia tak</span>
          <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollTo('story')}>my story</button>
            <button onClick={() => scrollTo('help')}>how i help</button>
            <button onClick={() => scrollTo('kind-words')}>kind words</button>
            <button onClick={() => scrollTo('connect')} className="nav-cta">let's talk</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="wave">👋</span>
            <span>hey there, i'm</span>
          </div>
          <h1>olivia</h1>
          <p className="hero-tagline">
            dartmouth '28 · international student from dubai & india ·
            here to help you navigate the wild world of u.s. college admissions
          </p>
          <p className="hero-subtitle">
            i remember how overwhelming it felt– figuring out applications from thousands of miles away,
            trying to tell my story in a way american schools would understand.
            <strong> i've been where you are.</strong>
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('connect')}>
              work with me
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('story')}>
              read my story
            </button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="story">
        <div className="section-accent section-accent-1" />
        <div className="container">
          <div className="story-header">
            <span className="section-label">my story</span>
            <h2>from dubai to the green</h2>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p className="lead">
                i still remember the late nights, the confusion, the "is my english even good enough?" anxiety.
              </p>
              <p>
                when i was applying to u.s. colleges from dubai, i felt so lost. the process was completely
                different from what my friends at home were doing. common app? supplementals?
                "demonstrated interest"? it was like learning a whole new language.
              </p>
              <p>
                fast forward a few years, and i'm now at dartmouth– the place i dreamed about but never
                thought i could actually get into. along the way, i learned so much about what makes an
                application stand out, how to tell your unique story, and most importantly, how to stay
                sane through it all.
              </p>
              <p>
                now i want to share everything i wish someone had told me. not as some distant "expert,"
                but as someone who's been through it recently and gets how you're feeling.
              </p>
            </div>
            <div className="story-visual">
              <div className="polaroid">
                <div className="polaroid-image">
                  <span>dartmouth green</span>
                </div>
                <p className="polaroid-caption">my happy place</p>
              </div>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-emoji">🌏</span>
                  <span className="stat-text">international perspective</span>
                </div>
                <div className="stat">
                  <span className="stat-emoji">📝</span>
                  <span className="stat-text">been through it all</span>
                </div>
                <div className="stat">
                  <span className="stat-emoji">💚</span>
                  <span className="stat-text">dartmouth '28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Experience */}
      <section id="awards" className="awards">
        <div className="section-accent section-accent-2" />
        <div className="container">
          <div className="awards-header">
            <span className="section-label">background</span>
            <h2>awards & experience</h2>
          </div>
          <div className="awards-grid">
            <div className="award-card">
              <svg className="award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              <h3>award title here</h3>
              <p>brief description of the award or recognition and what it meant to you.</p>
            </div>
            <div className="award-card">
              <svg className="award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              <h3>academic achievement</h3>
              <p>description of an academic honor, scholarship, or notable achievement.</p>
            </div>
            <div className="award-card">
              <svg className="award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <h3>leadership role</h3>
              <p>a leadership position or extracurricular highlight worth sharing.</p>
            </div>
            <div className="award-card">
              <svg className="award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <h3>publication or feature</h3>
              <p>any media features, publications, or notable projects you've been part of.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section id="help" className="help">
        <div className="container">
          <div className="help-header">
            <span className="section-label">how i can help</span>
            <h2>what i can help with</h2>
            <p className="section-intro">
              it doesn't matter where you are in the process– we can work on whatever you need.
            </p>
          </div>

          <div className="help-timeline">
            {/* Timeline connector */}
            <div className="timeline-line" />

            {/* Phase 1: Before Applications */}
            <div className="timeline-phase">
              <div className="timeline-marker">
                <span>1</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>before applications</h3>
                  <p className="timeline-subtitle">for students still building their profile</p>
                </div>
                <ul className="timeline-list">
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <div>
                      <strong>career & personal development</strong>
                      <p>figuring out what you're actually interested in and where that could take you</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    <div>
                      <strong>extracurricular ideas</strong>
                      <p>coming up with activities that matter to you, not just things that look good</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <div>
                      <strong>us education info sessions</strong>
                      <p>what life is actually like here, how scholarships work, application timelines</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    <div>
                      <strong>sat/act strategies</strong>
                      <p>test prep approaches that worked for me and students i've helped</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <div>
                      <strong>timeline planning</strong>
                      <p>mapping out what to do and when so you're not scrambling later</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    <div>
                      <strong>resources & examples</strong>
                      <p>links i've collected, essays that worked, websites i actually use</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2: Application Season */}
            <div className="timeline-phase">
              <div className="timeline-marker">
                <span>2</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>application season</h3>
                  <p className="timeline-subtitle">when it's go time</p>
                </div>
                <ul className="timeline-list">
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>
                    <div>
                      <strong>common app essay</strong>
                      <p>finding your story and figuring out how to tell it</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    <div>
                      <strong>essay writing & editing</strong>
                      <p>from first ideas to final drafts– i'll be there for every revision</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    <div>
                      <strong>activities section</strong>
                      <p>writing descriptions that actually show what you did and why it mattered</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                    <div>
                      <strong>college list</strong>
                      <p>finding the right mix of reach, match, and safety schools for you</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    <div>
                      <strong>financial aid & scholarships</strong>
                      <p>css profile help, need-based aid strategy, scholarships for international students</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <strong>international student strategy</strong>
                      <p>the stuff that's different when you're applying from abroad</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <div>
                      <strong>extracurricular development</strong>
                      <p>keeping your activities going strong through senior year</p>
                    </div>
                  </li>
                  <li>
                    <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    <div>
                      <strong>resources & examples</strong>
                      <p>essays that worked, helpful websites, things i wish i'd known</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="help-cta">
            <p>not sure what you need? we can figure that out on a call.</p>
            <button className="btn-primary" onClick={() => scrollTo('connect')}>book a free chat</button>
          </div>

          <div className="help-note">
            <p>
              <strong>a note for international students:</strong> i especially love working with
              students applying from abroad. i know what it's like– the time zones, the cultural
              translation, the pressure. you're not alone.
            </p>
          </div>
        </div>
      </section>

      {/* Kind Words */}
      <section id="kind-words" className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-label">kind words</span>
            <h2>from students i've worked with</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                "olivia was the big sister i needed through this process. she actually understood
                what it's like to apply from asia and never made me feel dumb for asking questions."
              </p>
              <div className="testimonial-author">
                <span className="author-name">yuki</span>
                <span className="author-info">japan → northwestern '28</span>
              </div>
            </div>
            <div className="testimonial">
              <p>
                "my essays went from 'meh' to actually sounding like me. olivia pushed me to
                be vulnerable in a way i never would have on my own. forever grateful."
              </p>
              <div className="testimonial-author">
                <span className="author-name">min-jun</span>
                <span className="author-info">korea → duke '27</span>
              </div>
            </div>
            <div className="testimonial">
              <p>
                "she's not just smart about admissions– she actually cares. when i was spiraling
                about decisions, she talked me through it. that meant more than any strategy session."
              </p>
              <div className="testimonial-author">
                <span className="author-name">sophie</span>
                <span className="author-info">singapore → dartmouth '28</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section id="connect" className="connect">
        <div className="section-accent section-accent-3" />
        <div className="container">
          <div className="connect-content">
            <div className="connect-info">
              <span className="section-label">let's connect</span>
              <h2>ready to start?</h2>
              <p>
                whether you're just starting to think about this or you're already drowning in
                essay drafts, feel free to reach out. i'd love to hear where you're at.
              </p>
              <div className="connect-details">
                <a href="mailto:olivia@example.com" className="connect-link">
                  <span>olivia@example.com</span>
                </a>
                <a href="https://calendly.com" className="connect-link" target="_blank" rel="noopener noreferrer">
                  <span>book a free intro call</span>
                </a>
              </div>
              <div className="connect-socials">
                <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <a href="https://youtube.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
              <div className="connect-timezone">
                <p>🌍 i work with students across all time zones– we'll find a time that works!</p>
              </div>
            </div>
            <form className="connect-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">your name</label>
                <input type="text" id="name" placeholder="what should i call you?" />
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="grade">grade</label>
                  <input type="text" id="grade" placeholder="e.g. 11th grade" />
                </div>
                <div className="form-group">
                  <label htmlFor="school">school</label>
                  <input type="text" id="school" placeholder="your school name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="colleges">what colleges are you thinking of applying to?</label>
                <textarea id="colleges" rows={2} placeholder="list some schools you're considering..." />
              </div>
              <div className="form-group">
                <label htmlFor="finaid">will you be applying for financial aid?</label>
                <select id="finaid">
                  <option value="">select an option</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                  <option value="unsure">not sure yet</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">anything else you'd like to share?</label>
                <textarea id="message" rows={3} placeholder="what are you hoping to get help with?" />
              </div>
              <button type="submit" className="btn-primary">send message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-logo">olivia tak</span>
              <p>college admissions help for international students</p>
            </div>
            <div className="footer-links">
              <button onClick={() => scrollTo('story')}>my story</button>
              <button onClick={() => scrollTo('help')}>how i help</button>
              <button onClick={() => scrollTo('kind-words')}>kind words</button>
              <button onClick={() => scrollTo('connect')}>contact</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>made with 💙 in hanover, nh</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
