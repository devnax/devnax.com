"use client"
import Stack from "@xanui/ui/Stack";
import About from "@/Partials/Home/About";
import Hero from "@/Partials/Home/Hero";
import HomePorjects from "@/Partials/Home/Projects";
import Carousel, { CarouselRef } from "./Carousel";
import Box from "@xanui/ui/Box";
import Image from "@xanui/ui/Image";
import { useRef } from "react";
import Button from "@xanui/ui/Button";
import Text from "@xanui/ui/Text";


const dummy = [
  {
    title: "PixelArt Generator",
    content: "Create and export pixel art with a simple and intuitive interface.",
    image: "https://picsum.photos/400/250?random=1",
    link: ""
  },
  {
    title: "Task Manager Pro",
    content: "Organize tasks, set reminders, and boost your productivity.",
    image: "https://picsum.photos/400/250?random=2",
    link: ""
  },
  {
    title: "WeatherNow",
    content: "Real-time weather updates with beautiful animations and forecasts.",
    image: "https://picsum.photos/400/250?random=3",
    link: ""
  },
  {
    title: "RecipeBook",
    content: "Discover and save delicious recipes from around the world.",
    image: "https://picsum.photos/400/250?random=4",
    link: ""
  },
  {
    title: "Portfolio Dashboard",
    content: "Track your projects, analytics, and personal progress in one place.",
    image: "https://picsum.photos/400/250?random=5",
    link: ""
  },
]


export default function Home() {
  const ref = useRef<CarouselRef>(null);

  return (
    <Stack >
      <Hero />
      <Carousel autoplay ref={ref}>
        {
          dummy.map((d, i) => (
            <Box key={d.title} height={180} m={1} >
              <Text>{i}</Text>
              <Image
                src={d.image}
                alt=""
                height="100%"
                radius={2}
              />
            </Box>
          ))
        }
      </Carousel>
      <Button
        onClick={() => {
          ref.current?.next()
        }}
      >Next</Button>
      <Button
        onClick={() => {
          ref.current?.prev()
        }}
      >prev</Button>
      <Stack
        bgcolor="background.secondary"
      >
        <About />
      </Stack>
      <Stack>
        <HomePorjects />
      </Stack>
    </Stack>
  );
}
