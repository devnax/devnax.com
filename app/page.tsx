"use client"
import Stack from "@xanui/ui/Stack";
import About from "@/Partials/Home/About";
import Hero from "@/Partials/Home/Hero";
import HomePorjects from "@/Partials/Home/Projects";
import Skills from "@/Partials/Skills";


export default function Home() {

  return (
    <Stack >
      <Hero />
      <Skills />
      <Stack
        bgcolor="surface.main"
      >
        <About />
      </Stack>
      <Stack>
        <HomePorjects />
      </Stack>
    </Stack>
  );
}
