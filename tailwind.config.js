module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",

    // "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mydark: {
          primary: "#fbbf24",

          secondary: "#ededed",

          accent: "#3b82f6",

          neutral: "#1c2633",

          "base-100": "#1e2934",

          info: "#1f3144",

          success: "#16a34a",

          warning: "#c3a025",

          error: "#ca3636",

          subur: "#71717a",
          alukaca: "#0ea5e9",
          hclpump: "#f59e0b",
          oxygen: "#8b5cf6",
        },
        mylight: {
          primary: "#3b82f6",

          secondary: "#093d7f",

          accent: "#fbbf24",

          neutral: "#ffffff",

          "base-100": "#e5e7eb",

          info: "#f6f6f6",

          success: "#16a34a",

          warning: "#c3a025",

          error: "#ca3636",
          subur: "#71717a",
          alukaca: "#0ea5e9",
          hclpump: "#f59e0b",
          oxygen: "#8b5cf6",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
