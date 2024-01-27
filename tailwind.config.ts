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
