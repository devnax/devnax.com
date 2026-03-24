"use client"
import { AppRoot, createTheme } from "@xanui/core";

createTheme("xan-light", {
   colors: {

      brand: {
         primary: "#F97316",
         secondary: "#22C55E",
         text: "#FFFFFF"
      },
      accent: {
         primary: "#3B82F6",
         secondary: "#FBBF24",
         text: "#1F2937"
      }
   }
})

createTheme("xan-dark", {
   colors: {
      brand: {
         primary: "#F97316",
         secondary: "#22C55E",
         text: "#FFFFFF"
      },
      accent: {
         primary: "#38BDF8",
         secondary: "#FBBF24",
         text: "#0F172A"
      }
   }
}, "dark")

export default function RootContainer({ children, theme, breakpoint }: any) {
   return (
      <AppRoot theme={theme || "xan-dark"} defaultBreakpoint={breakpoint || "xs"}>
         {children}
      </AppRoot>
   );
}
