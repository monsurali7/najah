const items = [
  'AI Career Planner',
  'CV & ATS Mastery',
  'Structured Thinking',
  'Interview Mastery',
  'Professional Presence',
  'Workplace Navigation',
  'Networking Frameworks',
  'Guest Industry Sessions',
  'Skill-Based Pathways',
  'Structured Cohorts',
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {allItems.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
