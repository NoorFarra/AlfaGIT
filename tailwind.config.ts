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
        "first":"url('https://www.alfaromeo.com/content/dam/alfa/cross/homepage/canvas-media/2024/stelvio/mobile.jpg/jcr:content/renditions/desktop.jpg')",
        "veloce":"url('https://www.alfaromeo.com/content/dam/alfa/cross/homepage/trim/background/december-2023/AR-Stelvio-MCA-Veloce-Model-Page-Trim.jpg')",
        "quad":"url('https://www.alfaromeo.com/content/dam/alfa/cross/homepage/trim/background/december-2023/AR-Stelvio-QV-Model-Page-Trim.jpg')",
        "second":"url('https://www.alfaromeo.com/content/dam/alfa/cross/homepage/canvas-media/free2move-esolutions/v2/december-2023/v2/mobile.jpg/jcr:content/renditions/desktop.jpg')",
        "third":"url('https://www.alfaromeo.com/content/dam/alfa/cross/homepage/canvas-media/milano/milano-reveal/milano/mobile.jpg/jcr:content/renditions/desktop.jpg')",
        "forth":"url('https://www.alfaromeo.com/content/dam/alfa/cross/homepage/canvas-media/2024/giulia/mobile.jpg/jcr:content/renditions/desktop.jpg')",
        "car":"url('https://www.alfaromeo.com/content/dam/alfa/cross/homepage/canvas-media/free2move-esolutions/v2/december-2023/v2/mobile.jpg/jcr:content/renditions/desktop.jpg')",
        "deal":"url('https://img.freepik.com/premium-photo/two-businessmen-shaking-hands-agreement-modern-office-generative-ai_230068-1262.jpg?w=740')",
        "map":"url('https://lh3.googleusercontent.com/pw/ABLVV84MkXKGSIRytUPa3tyndiW4eQpHWcKIHXYiIkQyiwXUsjXT0w_WxyhEQpBxT16vPA6b8rmPS722vqWmDImZliuAgytKH6G84KWdCQYgpAVNrTRYf5DBJ-zqZwuD0WgeduWjqWMdhlKaY0xUzUbNUNMG1flsQf4DveO_Wbscb2mQcoJwtn2xX26Dgw7WobjDjrFEKonHreu82Vjrz41Fl62Pv-rkXrMheh9qkIaPj1PVZfhugOf0JKHieT2mbhNXwuNK9XNhbUGS6BCBFDkbEwAvlX7qMu2jRMm_zCIXDmR-I2nRqwr2qsE-WjZWkLmIcRndmvEjSaUXTOVl0MtiOMOxr9712KSHSBO5_9jnTMKnEN4nof8tNfJaigi1NB0X7I0ZTfylq640EvlS3QcKVJ_p_lw_U-Ddn903CdQY6VmekA_ucUEIlfIJEELe2yrhDALFb8scx5SzMESOciPuTX_qdblJp71y2iIYlEAr5xvE1YPoaFqA_gIKpQZpr02jWnsnagwIfJCKRF16mdyfrab3yFtvbaxOJMILpbu_cbWrZ4Q9jYNSDlw4zrciq97O42Op3Gl4DBmaVfjTszhXeMU2vftnlgPeGx3rGT3_Bp3rw6w2CFxygecAp7jZop9ceI509Pt9J3lfPG7gU-Y23liMyCkFjWjnjpICDY8I4nc9xS_ZZVQZ-MeE_VpaB8KiVVHdQnVTrbvuV_FCjDi2Hiuv0DzpOdyL1OZRW5bOO6lPzIRtZEmAFYNTecx31rz5NefKgZJE16exUCjF-_iCeQLGulHog8CEx2yIs3RorEA0cVoeykH70fdg1HHJ2eyL6HTjDI7qEyWZKFw6CyDT62YEM05wpKSrBoI7X-j4dmW6rOeVYptjrowSa_MvwmzcUdEd_0KKbbstAjmxwCishCi1fWk5jW25fm3teweZbBH-AdVI2SGOfIEYA7xO=w538-h378-s-no-gm?authuser=0')",
        "alfalogo": "url('https://www.alfaromeo.com/content/dam/alfa/cross/integrations/header/logo-alfa-white.png')",        
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
