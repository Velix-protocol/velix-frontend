import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        "space-grotesk": "space-grotesk"
      },
      colors: {
        "velix-claim":"#F5F7FF",
        "velix-claim-green":"#2EA857",
        "velix-claim-blue":"#12CBE5",
        "velix-claim-grey":"#90919C",
        "velix-claim-red":"#FF1723",
        "velix-claim-gray":"#272727",
        "velix-claim-gray2":"#343434",
        "velix-claim-gray3":"#3F3F3F",
        "velix-text-gray":"#54616B",
        "velix-claim-green-bg":"#E6FAED",
        "velix-claim-blue-bg":"#ECFBFD",
        "velix-claim-grey-bg":"#F7F7F7",
        "velix-claim-red-bg":"#FFF3F0",
        "velix-blue": "#0000fe",
        "velix-primary": "var(--velix-primary)",
        "velix-yellow": "var(--velix-yellow)",
        "velix-slate-blue": "var(--velix-slate-blue)",
        "velix-black": "var(--velix-black)",
        "velix-gray": "var(--velix-gray)",
        "velix-slate-green": "var(--velix-slate-green)",
        "velix-red": "var(--velix-red)",
        "velix-green": "var(--velix-green)",
        "velix-form-input-dark": "var(--velix-form-input-dark)",
        "velix-light-dark": "var(--velix-light-dark)",
        "velix-page-dark": "var(--velix-page-dark)",
        "velix-form-dark-background": "var(--velix-form-dark-background)",
        "velix-icon-dark": "var(--velix-icon-dark)",
        "velix-dark-white": "var(--velix-dark-white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "custom-lg": "60px",
        "custom-md": "30px",
        "custom-sm": "16px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      spacing: {
        0.25: "0.0625rem"
      }
    }
  },

  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
