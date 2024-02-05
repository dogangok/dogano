"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import DotSvg from "./DotSvg"
import SearchSvg from "./SearchSvg"
import styles from "./Header.module.css"

export const Header = () => {
  const { theme, setTheme } = useTheme()

  // keep a list of the icon ids we put in the symbol
  // const icons = ["dot", "search", "icon-1", "icon-2"]

  // then define an Icon component that references the
  // function Icon({ id }: { id: string }, ...props: any) {
  //   return (
  //     <svg {...props}>
  //       <use href={`/../../public/svgs/sprite.svg#${id}`} />
  //     </svg>
  //   )
  // }

  // const SearchIcon = () => (
  //   <svg
  //     viewBox="0 0 24 24"
  //     width={160}
  //     height={160}
  //     className="relative order-3 col-[3_/4] row-[1] block h-6 w-6 cursor-pointer fill-current text-red-600"
  //   >
  //     <use href="/../../public/svgs/sprite.svg#search" />
  //   </svg>
  // )

  // function SearchIcon() {
  //   return (
  //     <svg
  //       viewBox="0 0 24 24"
  //       width={160}
  //       height={160}
  //       className="relative order-3 col-[3_/4] row-[1] block h-6 w-6 cursor-pointer fill-current"
  //     >
  //       <use
  //         href="/../../public/svgs/sprite.svg#search"
  //         className="relative order-3 col-[3_/4] row-[1] block h-6 w-6 cursor-pointer fill-current"
  //       />
  //     </svg>
  //   )
  // }

  return (
    <nav className="flex w-full items-center justify-between px-6 py-6">
      {/* <ThemeSwitcher /> */}
      {/* <div>
        {icons.map(id => {
          return <Icon key={id} id={id} />
        })}
        <button
          className="relative col-[1_/_2] row-[1] block h-6 w-6 cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            width="1em"
            height="1em"
            className="relative order-1 col-[1_/_2] row-[1] block h-6 w-6 cursor-pointer"
          >
            <circle
              className="h-80 w-80 fill-current text-text"
              cx={10}
              cy={10}
              r={8}
            />
            <circle
              className="fill-current text-bckg hover:text-text"
              cx={10}
              cy={10}
              r={6}
            />
          </svg>
        </button>
        <button className="relative flex h-5 w-5 items-center justify-center fill-current">
          <div className="absolute h-5 w-5 rounded-full bg-text fill-current"></div>
          <div className="absolute h-4 w-4 rounded-full bg-bckg fill-current hover:bg-text"></div>
        </button>
      </div> */}
      <button
        className={styles.svg}
        // className="relative col-[1_/_2] row-[1] block h-6 w-6 cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <DotSvg />
      </button>
      <div className="col-span-1 grid h-12 w-auto grid-rows-1">
        <Link href="/" className="relative order-2 block h-14 w-14">
          <div className="relative order-2 col-span-1 row-span-1 block h-14 w-14 cursor-pointer font-aktura text-5xl">
            dogan
          </div>
        </Link>
      </div>

      <div className="relative block h-6 w-6 cursor-pointer justify-self-end">
        <SearchSvg />
      </div>
      {/* <div className="relative block h-6 w-6 cursor-pointer justify-self-end">
        <SearchIcon />
      </div> */}
    </nav>
  )
}

// className="bg-bckg hover:bg-text"

// fill="currentColor"
