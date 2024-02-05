import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    className="relative order-1 col-[1_/_2] row-[1]    block h-[1.4rem] w-[1.4rem] cursor-pointer fill-text before:text-[15px] before:leading-4 before:tracking-[-0.00879776em] after:content-['Light'] dark:content-['Dark'] dark:after:content-['Light']"
    {...props}
  >
    <circle
      className="fill-current before:text-[15px] before:leading-4 before:tracking-[-0.00879776em]"
      cx={10}
      cy={10}
      r={8}
    />
    <circle
      className="origin-[10px_center] fill-bckg [transition:transform_200ms_ease-out_0s] before:text-[15px] before:leading-4 before:tracking-[-0.00879776em]      hover:scale-0 hover:fill-text dark:fill-bckg"
      cx={10}
      cy={10}
      r={6}
    />
  </svg>
)
export default SvgComponent
