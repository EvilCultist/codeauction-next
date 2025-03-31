import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;


// colors
//
// #fdf0d5 cream white
// #14213d dark blue
// #669bbc light blue
// #fb8500 orange dark
//
//
// 03045e blue
// bbd0ff
// b8c0ff
// c8b6ff
// e7c6ff
// ffd6ff
//
// 9d8189
// f4acb7
// ffcad4
// ffe5d9
// d8e2dc
