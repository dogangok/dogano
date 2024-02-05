import * as React from "react"
import { SVGProps } from "react"
const SearchSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
    <path
      fillRule="nonzero"
      d="M14.906 16.32a8 8 0 1 1 1.414-1.414l3.751 3.751-1.414 1.414-3.751-3.751zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
    />
  </svg>
)
export default SearchSvg
