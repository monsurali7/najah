const offerings = [
  {
    icon: 'ph-chart-line-up',
    num: '01',
    title: 'AI Career Planner',
    desc: 'A structured diagnostic that takes your CV and background, maps skill-based pathways, and outputs a personalised 30/60/90-day action plan with weekly routines.',
    badge: 'Free Tool',
    badgeClass: 'badge-free',
  },
  {
    icon: 'ph-file-text',
    num: '02',
    title: 'CV & ATS Mastery',
    desc: 'Why CVs fail, how recruiters actually read them, a 5-step tailoring method, and an impact formula — Action + What + How + Result — that gets you noticed.',
    badge: 'Workshop',
    badgeClass: 'badge-workshop',
  },
  {
    icon: 'ph-chats',
    num: '03',
    title: 'Communication Skills',
    desc: 'Structured thinking, professional presence, and workplace communication — the soft skills that decide how far your technical ability actually takes you.',
    badge: 'Coming Soon',
    badgeClass: 'badge-soon',
  },
  {
    icon: 'ph-user-check',
    num: '04',
    title: 'Interview Mastery',
    desc: 'From preparation frameworks to in-the-room composure — how to walk into any interview knowing exactly how to present your story.',
    badge: 'Coming Soon',
    badgeClass: 'badge-soon',
  },
  {
    icon: 'ph-microphone-stage',
    num: '05',
    title: 'Guest Industry Sessions',
    desc: 'Honest conversations with professionals across sectors — real takes on career navigation, industry realities, and what actually matters at each stage.',
    badge: 'Phase 2',
    badgeClass: 'badge-phase2',
  },
  {
    icon: 'ph-users-three',
    num: '06',
    title: 'Structured Cohorts',
    desc: 'A 4–6 week programme with weekly check-ins, structured tasks, and peer accountability — for those who want to go deeper with a group.',
    badge: 'Phase 3',
    badgeClass: 'badge-phase2',
  },
];

export default function Offerings() {
  return (
    <section className="offerings" id="offerings">
      <div className="offerings-header reveal">
        <div className="section-label">What we offer</div>
        <h2>
          Tools for every<br />
          <em>stage of the journey</em>
        </h2>
      </div>
      <div className="offerings-grid">
        {offerings.map((o) => (
          <div className="offering reveal" key={o.num}>
            <span className="offering-icon"><i className={`ph ${o.icon}`}></i></span>
            <div className="offering-num">{o.num}</div>
            <div className="offering-title">{o.title}</div>
            <p className="offering-desc">{o.desc}</p>
            <span className={`offering-badge ${o.badgeClass}`}>{o.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
