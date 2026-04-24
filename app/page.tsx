"use client"
import Stack from "@xanui/ui/Stack";
import About from "@/Partials/Home/About";
import Hero from "@/Partials/Home/Hero";
import HomePorjects from "@/Partials/Home/Projects";


export default function Home() {

  return (
    <Stack >
      <Hero />
      <Stack
        bgcolor="surface.light"
      >
        <About />
      </Stack>
      <Stack>
        <HomePorjects />
      </Stack>
    </Stack>
  );
}
