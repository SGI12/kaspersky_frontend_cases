/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray-accent': '#404040',
        'orange-accent': '#D68F00',
        'yellow-accent': '#F9C253',
        'bg-white-styled': '#FFFBF4',
        'gray-field': '#E8ECF2',
        'orange-primary': '#F9C253',
        'bg-gray-blured': 'rgba(45,43,43,0.2)'
      }
    },
    keyframes: {
      slideInTop: {
        "0%": {
          transform:" translateY(-100%)",
          opacity: 0
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1
        }
      }
    },
   
    animation: {
      slideIn: "slideInTop 0.7s ease-in-out",
      
    }
  },
  plugins: [],
};
