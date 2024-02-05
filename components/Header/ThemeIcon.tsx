import { SVGProps } from "react"

interface SVGRProps {}
const ThemeIcon = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
    <circle className="outer" cx="10" cy="10" r="8" />
    <circle className="inner" cx="10" cy="10" r="6" />
  </svg>
)

export default ThemeIcon
