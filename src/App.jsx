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
          <h1>Olivia</h1>
          <p className="hero-tagline">
            dartmouth '26 · international student from korea ·
            here to help you navigate the wild world of U.S. college admissions
          </p>
          <p className="hero-subtitle">
            I remember how overwhelming it felt—figuring out applications from thousands of miles away,
            trying to tell my story in a way American schools would understand.
            <strong> I've been where you are.</strong>
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('connect')}>
              Work with me
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('story')}>
              Read my story
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
        <div className="container">
          <div className="story-header">
            <span className="section-label">my story</span>
            <h2>From Seoul to the Green</h2>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p className="lead">
                I still remember the late nights, the confusion, the "is my English even good enough?" anxiety.
              </p>
              <p>
                When I was applying to U.S. colleges from Korea, I felt so lost. The process was completely
                different from what my friends at home were doing. Common App? Supplementals?
                "Demonstrated interest"? It was like learning a whole new language.
              </p>
              <p>
                Fast forward a few years, and I'm now at Dartmouth—the place I dreamed about but never
                thought I could actually get into. Along the way, I learned so much about what makes an
                application stand out, how to tell your unique story, and most importantly, how to stay
                sane through it all.
              </p>
              <p>
                Now I want to share everything I wish someone had told me. Not as some distant "expert,"
                but as someone who's been through it recently and gets how you're feeling.
              </p>
            </div>
            <div className="story-visual">
              <div className="polaroid">
                <div className="polaroid-image">
                  <span>📍 Dartmouth Green</span>
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
                  <span className="stat-text">dartmouth '26</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section id="help" className="help">
        <div className="container">
          <div className="help-header">
            <span className="section-label">how i can help</span>
            <h2>Real talk, real support</h2>
            <p className="section-intro">
              No fancy corporate packages here. Just honest guidance from someone who gets it.
            </p>
          </div>
          <div className="help-grid">
            <div className="help-card">
              <div className="card-icon">🎯</div>
              <h3>School List Strategy</h3>
              <p>
                Let's figure out which schools are actually right for <em>you</em>—not just
                the famous names. I'll help you find places where you'll genuinely thrive.
              </p>
            </div>
            <div className="help-card featured">
              <div className="card-badge">most popular</div>
              <div className="card-icon">✍️</div>
              <h3>Essay Mentoring</h3>
              <p>
                This is my favorite part. We'll dig deep to find YOUR story—the one only you
                can tell. No templates, no generic advice. Just authentic you.
              </p>
            </div>
            <div className="help-card">
              <div className="card-icon">🗣️</div>
              <h3>Interview Prep</h3>
              <p>
                Especially for international students, interviews can feel intimidating.
                I'll help you feel confident sharing your story out loud.
              </p>
            </div>
            <div className="help-card">
              <div className="card-icon">🧭</div>
              <h3>Full Journey Support</h3>
              <p>
                From "where do I even start?" to "I got in!"—I can be there for the whole
                ride. Check-ins, pep talks, deadline reminders, and everything in between.
              </p>
            </div>
          </div>
          <div className="help-note">
            <p>
              <strong>A note for international students:</strong> I especially love working with
              students who are navigating this process from abroad. I know the unique challenges—the
              time zones, the cultural translation, the pressure. You're not alone. 💙
            </p>
          </div>
        </div>
      </section>

      {/* Kind Words */}
      <section id="kind-words" className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-label">kind words</span>
            <h2>From students I've worked with</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                "Olivia was the big sister I needed through this process. She actually understood
                what it's like to apply from Asia and never made me feel dumb for asking questions."
              </p>
              <div className="testimonial-author">
                <span className="author-name">Yuki</span>
                <span className="author-info">Japan → Northwestern '28</span>
              </div>
            </div>
            <div className="testimonial">
              <p>
                "My essays went from 'meh' to actually sounding like ME. Olivia pushed me to
                be vulnerable in a way I never would have on my own. Forever grateful."
              </p>
              <div className="testimonial-author">
                <span className="author-name">Min-jun</span>
                <span className="author-info">Korea → Duke '27</span>
              </div>
            </div>
            <div className="testimonial">
              <p>
                "She's not just smart about admissions—she actually cares. When I was spiraling
                about decisions, she talked me through it. That meant more than any strategy session."
              </p>
              <div className="testimonial-author">
                <span className="author-name">Sophie</span>
                <span className="author-info">Singapore → Dartmouth '28</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <div className="process-header">
            <span className="section-label">the process</span>
            <h2>How it works</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Let's chat</h3>
                <p>We'll have a free intro call to get to know each other. No pressure, no sales pitch—just a real conversation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Make a plan</h3>
                <p>Based on where you are, we'll figure out what you need and set up a game plan that works for your timeline.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Get to work</h3>
                <p>Regular sessions, honest feedback, and lots of support. I'm in your corner the whole way.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Celebrate</h3>
                <p>When those acceptance emails come in, we celebrate together. (I might cry happy tears, fair warning.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section id="connect" className="connect">
        <div className="container">
          <div className="connect-content">
            <div className="connect-info">
              <span className="section-label">let's connect</span>
              <h2>Ready to start?</h2>
              <p>
                Whether you're just starting to think about applications or you're deep in essay
                drafts, I'd love to hear from you. Let's grab a virtual coffee and chat about
                your journey.
              </p>
              <div className="connect-details">
                <a href="mailto:olivia@example.com" className="connect-link">
                  <span className="link-icon">📧</span>
                  <span>olivia@example.com</span>
                </a>
                <a href="https://calendly.com" className="connect-link" target="_blank" rel="noopener noreferrer">
                  <span className="link-icon">📅</span>
                  <span>Book a free intro call</span>
                </a>
              </div>
              <div className="connect-timezone">
                <p>🌍 I work with students across all time zones—we'll find a time that works!</p>
              </div>
            </div>
            <form className="connect-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" placeholder="What should I call you?" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="location">Where are you based?</label>
                <input type="text" id="location" placeholder="City, Country" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell me a bit about yourself</label>
                <textarea id="message" rows={4} placeholder="What grade are you in? What are you hoping to get help with?" />
              </div>
              <button type="submit" className="btn-primary">Send message</button>
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
              <p>helping international students find their place at amazing schools</p>
            </div>
            <div className="footer-links">
              <button onClick={() => scrollTo('story')}>my story</button>
              <button onClick={() => scrollTo('help')}>how i help</button>
              <button onClick={() => scrollTo('kind-words')}>kind words</button>
              <button onClick={() => scrollTo('connect')}>contact</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>made with 💚 in hanover, nh</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
