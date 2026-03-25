"use client"
import Footer from "@/Footer";
import Navbar from "@/Navbar";
import { darkTheme, lightTheme } from "@/theme";
import { AppRoot } from "@xanui/core";
import { useState } from "react";


export default function RootContainer({ children, theme, breakpoint }: any) {
   const [t, setTheme] = useState(theme === 'xan-dark' ? darkTheme : lightTheme)

   return (
      <AppRoot
         theme={t}
         defaultBreakpoint={breakpoint || "xs"}
         onThemeChange={(nt) => setTheme(nt)}
      >
         <Navbar />
         {children}
         <Footer />
      </AppRoot>
   );
}
