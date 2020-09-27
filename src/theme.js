export default {
  name: "my theme",
  rounding: 4,
  spacing: 24,
  defaultMode: "light",
  global: {
    colors: {
      brand: {
        dark: "#7700cc",
        light: "#40b8b6"
      },
      background: {
        dark: "#111",
        light: "#e9e9e9"
      }
      // "accent-3": "#706c87"
    },
    font: {
      family: "Roboto"
    },
    active: {
      background: "active-background",
      color: "red"
    },
    hover: {
      background: "active-background",
      color: "yellow"
    },
    selected: {
      background: "selected-background",
      color: "brown"
    }
  },
  chart: {},
  diagram: {
    line: {}
  },
  meter: {}
};
