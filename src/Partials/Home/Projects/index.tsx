import Container from '@xanui/ui/Container'
import GridContainer from '@xanui/ui/GridContainer'
import GridItem from '@xanui/ui/GridItem'
import Stack from '@xanui/ui/Stack'
import React from 'react'
import Card from './Card'
import Text from '@xanui/ui/Text'

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

const HomePorjects = () => {
   return (
      <Stack py={10}>
         <Container>
            <Stack gap={8}>
               <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
               >
                  <Text variant="h2">Featured Projects</Text>
                  <Text color="text.secondary">A selection of my most impactful work across various industries and technologies.</Text>
               </Stack>

               <GridContainer spacing={2}>
                  {
                     dummy.map(p => (
                        <GridItem key={p.title} xs={12} md={6} lg={4}>
                           <Card
                              {...p}
                           />
                        </GridItem>
                     ))
                  }

               </GridContainer>
            </Stack>

         </Container>
      </Stack>
   )
}

export default HomePorjects
