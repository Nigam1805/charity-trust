/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        leaf: {
          DEFAULT: "hsl(var(--leaf) / <alpha-value>)",
          foreground: "hsl(var(--leaf-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          hover: "hsl(var(--primary-hover))",
          light: "hsl(var(--primary-light) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted))",
        surface: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",
        backdrop: "hsl(var(--backdrop))",
        overlay: {
          DEFAULT: "hsl(var(--overlay))",
          panel: "hsl(var(--overlay-panel))",
          "panel-text": "hsl(var(--overlay-panel-text))",
          "panel-text-muted": "hsl(var(--overlay-panel-text-muted))",
          border: "hsl(var(--overlay-border))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        theme: "var(--radius)",
        "theme-lg": "var(--radius)",
        "theme-xl": "var(--radius)",
      },
      fontFamily: {
        heading: [ "var(--font-heading)", "system-ui", "sans-serif" ],
        body: [ "var(--font-body)", "system-ui", "sans-serif" ],
        sans: [ "var(--font-body)", "system-ui", "sans-serif" ],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      fontSize: {
        "hero": [ "2.25rem", { lineHeight: "1.2" } ],
        "section": [ "1.875rem", { lineHeight: "1.3" } ],
        "card-title": [ "1.25rem", { lineHeight: "1.4" } ],
      },
    },
  },
  plugins: [],
};
