const perks = [
  {
    title: 'AI Career Planner — immediate access',
    desc: 'Your skill profile, pathways, and 30/60/90-day plan, free.',
  },
  {
    title: 'Workshop invites before public release',
    desc: 'First access to CV, interview, and communication workshops.',
  },
  {
    title: 'Weekly insight email',
    desc: 'One practical idea or framework, once a week. No fluff.',
  },
  {
    title: 'Priority cohort access',
    desc: 'First in line when our structured programmes launch.',
  },
  {
    title: 'A community that takes growth seriously',
    desc: 'Principled, practical, and genuinely supportive.',
  },
];

export default function JoinSection() {
  return (
    <section className="join" id="join">
      <div className="join-left reveal">
        <div className="section-label">Get early access</div>
        <h2>
          Be part of<br />
          <em>what we&apos;re building</em>
        </h2>
        <p className="body-text">
          Najah is launching soon. Join the waitlist to get early access to tools,
          workshops, and community resources — and be part of something built with
          care from the ground up.
        </p>
        <div className="join-form">
          <div className="form-row">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email address" />
          </div>
          <button className="join-submit">Join the Waitlist →</button>
          <p className="form-note">
            No spam. Just meaningful updates when we have something worth sharing.
            Unsubscribe anytime.
          </p>
        </div>
      </div>

      <div className="join-right reveal">
        {perks.map((perk, i) => (
          <div className="perk-row" key={i}>
            <div className="perk-check"></div>
            <div className="perk-text">
              <strong>{perk.title}</strong>
              <span>{perk.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
