import ValueBoxes from './ValueBoxes';

const whoList = [
  'University students figuring out their first steps',
  'Graduates entering the corporate world',
  'Early-career professionals switching or advancing',
  'Career changers rebuilding their path',
  'Anyone who wants to grow with intention',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="reveal">
        <div className="section-label">Who we are</div>
        <h2>
          Built for people who<br />
          <em>want more than a job.</em>
        </h2>
        <p className="body-text">
          Most career advice either burns you out with hustle culture, or drowns you
          in theory that never touches real life. Najah is different — a calm,
          structured community that takes your ambition seriously without telling you
          to sacrifice everything for it.
        </p>
        <p className="body-text">
          We&apos;re for students, graduates, and early-career professionals
          navigating structured corporate careers — who want practical tools, honest
          guidance, and a community that shares their values.
        </p>
        <ValueBoxes />
      </div>

      <div className="about-right-visual reveal">
        <p className="quote-block">
          &ldquo;Unsure about your career? Start with what you&apos;ve already done.&rdquo;
        </p>
        <div className="who-list">
          {whoList.map((item, i) => (
            <div className="who-item" key={i}>
              <span className="who-dot"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
