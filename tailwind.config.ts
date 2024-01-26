import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "first":"url('../imgs/first.jpg')",
        "veloce":"url('../imgs/veloce.jpg')",
        "quad":"url('../imgs/quadro.jpg')",
        "second":"url('../imgs/second.jpg')",
        "third":"url('../imgs/third.jpg')",
        "forth":"url('../imgs/forth.jpg')",
        "car":"url('../imgs/caar.jpg')",
        "deal":"url('../imgs/deal.jpg')",
        "map":"url('../imgs/map.jpg')",
        "alfalogo": "url('../imgs/logo-alfa.png')",
        "STEVQV": "url('../imgs/STEVQV.png')",
        "GULQV": "url('../imgs/GULQV.png')",
        "STEV": "url('../imgs/stev.png')",
        "GULE": "url('../imgs/GUL.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
