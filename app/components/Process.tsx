const steps = [
  {
    icon: 'ph-sign-in',
    num: '01',
    title: 'Join the community',
    desc: 'Sign up, get instant access to the AI career planner and early content. No cost to get started.',
  },
  {
    icon: 'ph-target',
    num: '02',
    title: 'Build your baseline',
    desc: 'Run the diagnostic, get your skill profile and pathway options, leave with a clear 30/60/90-day plan.',
  },
  {
    icon: 'ph-book-open',
    num: '03',
    title: 'Develop through workshops',
    desc: 'Attend focused sessions on CV mastery, interviews, communication. Practical skill-building, not lectures.',
  },
  {
    icon: 'ph-users',
    num: '04',
    title: 'Go deeper in a cohort',
    desc: 'Join a structured cohort with peers for accountability, weekly check-ins, and real career progression.',
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-head reveal">
        <div>
          <div className="section-label">How it works</div>
          <h2>
            A path that<br />
            <em>actually makes sense</em>
          </h2>
        </div>
        <p className="process-sub">
          No overwhelming roadmap. No rigid job title tracks. A structured,
          skill-based approach that grows with you — at your own pace, with real
          support behind it.
        </p>
      </div>
      <div className="process-steps">
        {steps.map((s) => (
          <div className="step reveal" key={s.num}>
            <span className="step-icon"><i className={`ph ${s.icon}`}></i></span>
            <div className="step-num">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
