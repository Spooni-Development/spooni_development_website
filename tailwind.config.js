module.exports = {
  content: ["./docs/.vitepress/**/*.{js,ts,vue}", "./docs/**/*.md"],
  theme: {
    extend: {
      colors: {
        "color-scheme": "dark",
        primary: "#f25c05",
        secondary: "#2b7d96",
        accent: "#f25c05",
        neutral: "#57534e",
        info: "#8BE9FD",
        success: "#50FA7B",
        warning: "#F1FA8C",
        error: "#FF5555",
        "base-100": "#202127",
        "base-200": "#242933",
        "base-300": "#20252E",
        "base-content": "#A6ADBB",
        white: "#fff",
        "bg-primary": "#f25c05",
        "bg-secondary": "#2b7d96",
        "bg-neutral": "#57534e",
        "border-primary": "#f25c05",
      },
    },
  },
};