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
        "first":"url('./../imgs/first.jpg')",
        "veloce":"url('./../imgs/veloce.jpg')",
        "quad":"url('./../imgs/quadro.jpg')",
        "second":"url('./../imgs/second.jpg')",
        "third":"url('./../imgs/third.jpg')",
        "forth":"url('./../imgs/forth.jpg')",
        "car":"url('./../imgs/caar.jpg')",
        "deal":"url('./../imgs/deal.jpg')",
        "map":"url('./../imgs/map.jpg')",
        "alfalogo": "url('./../imgs/logoalfa.jpg')",
        "STEVQV": "url('https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/june-2023/AR-Home-Trim-Figurini-Stelvio-QV-MCA.png')",
        "GULQV": "url('https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/june-2023/AR-Home-Trim-Figurini-Giulia-QV-MCA.png')",
        "STEV": "url('https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/AR-Menu-Stelvio-MCA-TI.png')",
        "GULE": "url('https://www.alfaromeo.com/content/dam/alfa/cross/header/modelli/AR-Menu-GIULIA-MCA-TI.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
