"use client"
import Footer from "@/Footer";
import Navbar from "@/Navbar";
import { AppRoot, createTheme } from "@xanui/core";
import { useState } from "react";


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
createTheme("xan-light", { colors })
createTheme("xan-dark", { colors }, "dark")


export default function RootContainer({ children, theme, breakpoint }: any) {
   const [t, setTheme] = useState(theme)
   return (
      <AppRoot
         theme={t}
         defaultBreakpoint={breakpoint || "xs"}
         onThemeChange={(nt) => setTheme(nt)}
      // sx={{
      //    backgroundImage: "url(/hero-bg.png)",
      //    backgroundRepeat: "repeat"
      // }}
      >
         <Navbar />
         {children}
         <Footer />
      </AppRoot>
   );
}
