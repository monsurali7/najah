import Logo from './Logo';

export default function Navbar() {
  return (
    <nav id="nav">
      <a href="#" className="nav-logo">
        <Logo height={50} />
        <span className="nav-logo-text">NAJAH</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#offerings">Offerings</a></li>
        <li><a href="#join">Join</a></li>
      </ul>
      <a href="#join" className="nav-cta">Join the Waitlist</a>
    </nav>
  );
}
