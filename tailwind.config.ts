import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem"
      }
    },
    extend: {
      fontFamily: {
        graphik: [
          "var(--font-graphik)",
          "-system-ui",
          "-apple-system",
          "sans-serif"
        ],
        supria: [
          "var(--font-supria)",
          "-system-ui",
          "-apple-system",
          "sans-serif"
        ],
        sans: ["var(--font-sans)", "-system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-seriftext)", "serif"],
        mono: ["var(--font-mono)", "mono"],
        aktura: ["var(--font-aktura)", "mono"],
        roman: ["var(--font-roman)", "serif"]
      },
      colors: {
        background: "hsl(var(--c-bg))",
        foreground: "hsl(var(--c-text))",
        textalt: "hsl(var(--c-text-alt))",
        detail: "hsl(var(--c-detail))"

        // wit: "hsl(var(--wit))",
        // grijs: "hsl(var(--grijs))",

        // bckg: "hsl(var(--bckg))",
        // text: "hsl(var(--text))",
        // textalt: "hsl(var(--textalt))",
        // detail: "hsl(var(--detail))",
        // clprimary: "hsl(var(--clprimary))",
        // clsecondary: "hsl(var(--clsecondary))",

        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))"
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))"
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))"
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))"
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))"
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))"
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))"
        // }
      }
    }
  },
  plugins: []
}

export default config
