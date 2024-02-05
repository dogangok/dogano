"use client"
import { useTheme } from "next-themes"
import Link from "next/link"
import Logo from "@/public/images/dogan.svg"
import Search from "@/public/images/search.svg"

export const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <header className="header">
        <div className="header-inner border-bottom">
          <Link className="header-home" href="/" aria-label="Homepage">
            <svg className="logo" viewBox="0 0 156 71">
              <Logo />
            </svg>
          </Link>

          <button
            className="header-btn btn-scheme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Reading Mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <circle className="outer" cx="10" cy="10" r="8" />
              <circle className="inner" cx="10" cy="10" r="6" />
            </svg>
          </button>

          <button className="header-btn btn-search" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <Search />
            </svg>
          </button>

          <form className="search-form" action="/search" method="get">
            <input
              type="search"
              name="s"
              id="s"
              className="search-input border-around"
              required
              placeholder="Search…"
            />
            <button
              className="search-submit"
              type="submit"
              aria-label="Search Submit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                <path
                  fillRule="nonzero"
                  d="M14.906 16.32a8 8 0 1 1 1.414-1.414l3.751 3.751-1.414 1.414-3.751-3.751zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            </button>
          </form>
        </div>
      </header>
      <div className="menu">
        <button
          className="menu-btn border-bottom"
          onClick={() =>
            document.querySelector(".menu")?.classList.toggle("is-open")
          }
          aria-label="Light/Dark Mode"
        >
          Menu
        </button>
        <nav className="menu-inner border-bottom">
          <Link className=" menu-item" href="/architecture" target="_self">
            Architecture
          </Link>
          <Link className=" menu-item" href="/interiors" target="_self">
            Interiors
          </Link>
          <Link className=" menu-item" href="/furniture" target="_self">
            Furniture
          </Link>
          <Link className=" menu-item" href="/homewares" target="_self">
            Homewares
          </Link>
          <Link className=" menu-item" href="/moods" target="_self">
            Moods
          </Link>
          <Link className=" menu-item" href="/creators" target="_self">
            Conversations
          </Link>
          <Link
            className=" menu-item"
            href="/shop"
            rel="noopener noreferrer"
            target="_blank"
          >
            Shop
          </Link>
          <Link className=" menu-item" href="/about" target="_self">
            About
          </Link>
        </nav>
      </div>
    </>
  )
}
