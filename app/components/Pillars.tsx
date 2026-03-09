const pillars = [
  {
    num: '01',
    title: 'Clarity over noise',
    desc: 'Structured guidance that cuts through the chaos of career advice and gets to what actually matters.',
  },
  {
    num: '02',
    title: 'Skill-based thinking',
    desc: 'We focus on transferable skills and pathways — not rigid role tracks that lock you in too early.',
  },
  {
    num: '03',
    title: 'Values-grounded growth',
    desc: 'Ambition and integrity aren\'t opposites. We help you build a career you\'re genuinely proud of.',
  },
  {
    num: '04',
    title: 'Practical, not preachy',
    desc: 'Real tools, honest conversations, and guidance you can act on — without the motivational filler.',
  },
];

export default function Pillars() {
  return (
    <div className="pillars">
      {pillars.map((p) => (
        <div className="pillar" key={p.num}>
          <div className="pillar-num">{p.num}</div>
          <div>
            <div className="pillar-title">{p.title}</div>
            <div className="pillar-desc">{p.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
