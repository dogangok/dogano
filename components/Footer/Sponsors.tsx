import Link from "next/link"
import Aether from "@/public/images/aether.svg"
import Gestalten from "@/public/images/gestalten.svg"
import Handvaerk from "@/public/images/handvaerk.svg"
import Hodina from "@/public/images/hodina.svg"
import Minimal from "@/public/images/minimal.svg"
import ULX from "@/public/images/ulx.svg"

export const Sponsors = () => {
  return (
    <section className="s">
      <div className="s-inner border-top">
        <figure className="s-container">
          <Link
            className="s-link"
            target="_blank"
            aria-label="Visit Sponsor"
            href="/"
          >
            <svg>
              <Minimal />
            </svg>
          </Link>
          <figcaption className="s-tagline">
            Beautiful, Focused Writing
          </figcaption>
        </figure>
        <figure className="s-container">
          <Link
            className="s-link"
            target="_blank"
            aria-label="Visit Sponsor"
            href="/"
          >
            <svg>
              <Handvaerk />
            </svg>
          </Link>
          <figcaption className="s-tagline">Perfect Basics</figcaption>
        </figure>
        <figure className="s-container">
          <Link
            className="s-link"
            target="_blank"
            aria-label="Visit Sponsor"
            href="/"
          >
            <svg>
              <Aether />
            </svg>
          </Link>
          <figcaption className="s-tagline">Visionary Audio Eyewear</figcaption>
        </figure>
        <figure className="s-container">
          <Link
            className="s-link"
            target="_blank"
            aria-label="Visit Sponsor"
            href="/"
          >
            <svg>
              <Gestalten />
            </svg>
          </Link>
          <figcaption className="s-tagline">
            Publisher of Creative Books
          </figcaption>
        </figure>
        <figure className="s-container">
          <Link
            className="s-link"
            target="_blank"
            aria-label="Visit Sponsor"
            href="/"
          >
            <svg>
              <Hodina />
            </svg>
          </Link>
          <figcaption className="s-tagline">
            A Less but Better Timepiece
          </figcaption>
        </figure>
        <figure className="s-container">
          <Link
            className="s-link"
            target="_blank"
            aria-label="Visit Sponsor"
            href="/"
          >
            <svg>
              <ULX />
            </svg>
          </Link>
          <figcaption className="s-tagline">
            Minimal Office Accessories
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
