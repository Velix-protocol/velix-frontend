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
      fontSize: {
        'sm': '0.875rem',  
        'md': '1rem',      
        'lg': '1.125rem',  
      },
      fontFamily: {
        "space-grotesk": "space-grotesk"
      },
      colors: {
        "velix-Ecosystem": "#F5F7FF",
        "velix-gray-100":"#FFFFFF",
        "velix-gray-200":"#E9ECFF",
        "velix-dark-hover": "#414040",
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
        // Adding the custom values for ChooseEcosystemDialog
        "custom-lg": "3.75rem",
        "custom-md": "2.25rem",
        "custom-sm": "1.25rem"
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
