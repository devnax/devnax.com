import { createTheme } from "@xanui/core"

const primary = "#F54A00"
const accent = "#155dfc"

export const lightTheme = createTheme({
   mode: "light",
   name: "xan-light",
   colors: {
      primary,
      accent
   }
})
export const darkTheme = createTheme({
   mode: "dark",
   name: "xan-dark",
   colors: {
      primary,
      accent
   }
})