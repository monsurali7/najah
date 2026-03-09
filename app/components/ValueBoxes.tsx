const values = [
  {
    icon: 'ph-compass-rose',
    title: 'Intentional',
    desc: 'Every step is deliberate. We help you build a career with purpose, not just momentum.',
  },
  {
    icon: 'ph-wrench',
    title: 'Practical',
    desc: 'Tools and frameworks you can use immediately — no fluff, no theory for theory\'s sake.',
  },
  {
    icon: 'ph-handshake',
    title: 'Community-led',
    desc: 'You grow faster alongside others who share your values and your drive.',
  },
  {
    icon: 'ph-scales',
    title: 'Balanced',
    desc: 'Ambition without burnout. We take your career seriously without asking you to sacrifice everything for it.',
  },
];

export default function ValueBoxes() {
  return (
    <div className="about-values">
      {values.map((v) => (
        <div className="value-box" key={v.title}>
          <span className="value-icon"><i className={`ph ${v.icon}`}></i></span>
          <div className="value-title">{v.title}</div>
          <div className="value-desc">{v.desc}</div>
        </div>
      ))}
    </div>
  );
}
