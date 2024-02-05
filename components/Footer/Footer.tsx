import Link from "next/link"
import Logo from "@/public/images/dogan.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-links border-top">
        <Link className="footer-home" href="/" aria-label="Homepage">
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 156 71"
          >
            <Logo />
          </svg>
        </Link>

        <span className="footer-link-container">
          <Link className="footer-link" href="/about">
            Contacts
          </Link>
          <Link className="footer-link" href="/sponsors">
            Sponsors
          </Link>
          <Link className="footer-link" href="/privacy">
            Privacy
          </Link>
        </span>

        <span className="footer-link-container footer-socials">
          <Link
            className="footer-link footer-social"
            target="_blank"
            href="https://twitter.com/skyborn"
            rel="noreferrer"
          >
            Twitter
          </Link>
          <Link
            className="footer-link footer-social"
            target="_blank"
            href="https://www.instagram.com/skyborn"
            rel="noreferrer"
          >
            Instagram
          </Link>
          <Link
            className="footer-link footer-social"
            target="_blank"
            href="https://www.facebook.com/skyborn"
            rel="noreferrer"
          >
            Facebook
          </Link>
        </span>
      </nav>
    </footer>
  )
}
