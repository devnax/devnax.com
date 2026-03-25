"use client"
import Stack from "@xanui/ui/Stack";
import Hero from "./Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(document.cookie);

  }, [])
  return (
    <Stack>
      <Hero />
    </Stack>
  );
}
