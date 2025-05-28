/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        card: "hsl(var(--card))",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-delay-1': 'fadeIn 1s ease-out 0.5s forwards',
        'fade-delay-2': 'fadeIn 1s ease-out 1s forwards',
        'fade-delay-3': 'fadeIn 1s ease-out 1.5s forwards',
        'fade-delay-4': 'fadeIn 1s ease-out 2s forwards',
      },
    },
    },
  
  plugins: [],
};
