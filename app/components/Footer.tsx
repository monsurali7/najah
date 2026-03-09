import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo-wrap">
        <Logo height={44} inverted />
        <span className="footer-logo-text">NAJAH</span>
      </div>
      <p className="footer-copy">© 2025 Najah. Built with intention.</p>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#offerings">Offerings</a></li>
        <li><a href="#join">Join</a></li>
      </ul>
    </footer>
  );
}
