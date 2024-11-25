import daisyui from 'daisyui'
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#013580',
        primary2: '#16478C',
        primary3: '#1B4581',
        primarylight: '#B4C5D9',
        secondary: '#F79619',
        secondary2: '#FFD41A',
        customblack: '#1A1A1A',
      },
    },
  },
  plugins: [daisyui],
}