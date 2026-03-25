import { createTheme } from "@xanui/core"

const colors = {
   brand: {
      primary: "#F54A00",
      secondary: "#FF6900", // lighter orange
      text: "#FFFFFF"
   },
   accent: {
      primary: "#155dfc",   // blue
      secondary: "#2b7fff", // lighter blue
      text: "#FFFFFF"
   }
}

export const lightTheme = createTheme("xan-light", { colors })
export const darkTheme = createTheme("xan-dark", { colors }, "dark")