export default function PlannerCTA() {
  return (
    <section className="planner-cta">
      <div className="planner-cta-left reveal">
        <div className="section-label">Free Tool</div>
        <h2>
          Your personalised career plan,<br />
          <em>in minutes.</em>
        </h2>
        <p className="planner-cta-desc">
          Paste your CV, answer 6 quick questions, and get back skill-based career pathways,
          a full skill gap breakdown, and a 30/60/90 day action plan — tailored to you.
        </p>
        <a
          href="https://chatgpt.com/g/g-69992dbe0b748191b3eb2aa0d2258c8e-najah-ai-career-advisor"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Try the Planner →
        </a>
      </div>
      <div className="planner-cta-right reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/planner-screenshot.png"
          alt="Najah AI Career Planner screenshot"
          className="planner-screenshot"
        />
      </div>
    </section>
  );
}
