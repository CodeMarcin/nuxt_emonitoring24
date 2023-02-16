import type {Config} from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";
export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        one: "#5B15B0",
        two: "#7B12FC",
        three: "#FDC705",
        four: "#12A3FC",
        five: "#1575B0",
      },
    },
    fontFamily: {
      second: "Montserrat",
    },
  },
};