import Pillars from './Pillars';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Your career,<br />
          <em>built with<br />intention.</em>
        </h1>
        <p className="hero-sub">
          Structured guidance for ambitious young professionals — helping you navigate
          corporate life with clarity, real skill, and values that don&apos;t get left
          at the door.
        </p>
        <div className="hero-actions">
          <a href="#join" className="btn-primary">Join the Waitlist</a>
          <a href="#offerings" className="btn-outline">See what we offer</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-right-label">What Najah is built on</div>
        <h2>
          Not hustle culture.<br />
          <em>Something better.</em>
        </h2>
        <Pillars />
      </div>
    </section>
  );
}
