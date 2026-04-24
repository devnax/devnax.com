"use client"
import { Transition } from '@xanui/core'
import Mail from '@xanui/icons/Mail'
import Work from '@xanui/icons/Work'
import Avatar from '@xanui/ui/Avatar'
import Button from '@xanui/ui/Button'
import Container from '@xanui/ui/Container'
import GridContainer from '@xanui/ui/GridContainer'
import GridItem from '@xanui/ui/GridItem'
import Stack from '@xanui/ui/Stack'
import Text from '@xanui/ui/Text'

const Hero = () => {

   return (
      <Stack
         pt={10}
         pb={20}
         alignItems={"center"}
         justifyContent={"center"}
      >
         <Container>
            <GridContainer
               spacing={2}
               alignItems={"center"}
               flexDirection={{
                  xs: "column-reverse",
                  md: "row"
               }}
            >
               <GridItem xs={12} md={8}>
                  <Stack gap={3}
                  >
                     <Stack >
                        <Transition variant={"fadeDown"} open duration={1500}>
                           <Text
                              textAlign={{
                                 xs: "center",
                                 md: "left"
                              }}
                              variant={'h1'}
                              fontSize={{
                                 xs: 50,
                                 md: 80
                              }}
                              color="primary.main"
                              fontWeight={"bold"}
                              lineHeight={1.2}
                           >Naxrul Ahmed</Text>
                        </Transition>
                        <Transition variant={"fadeUp"} open duration={1500}>
                           <Text
                              textAlign={{
                                 xs: "center",
                                 md: "left"
                              }}
                              variant={{
                                 xs: "h4",
                                 md: "h2"
                              }}
                              fontWeight={"lighter"}
                           >Building Scalable Web Apps | Full-Stack Innovator | Problem Solver</Text>
                        </Transition>

                     </Stack>
                     <Text
                        textAlign={{
                           xs: "center",
                           md: "left"
                        }}
                        variant={{
                           xs: "text",
                           md: "h6"
                        }}
                        color="surface.muted"
                        fontWeight={{
                           xs: 300,
                           md: 300
                        }}
                     >Turning Ideas into Code, Code into Impact</Text>
                     <Stack
                        flexRow
                        gap={2}
                        justifyContent={{
                           xs: "center",
                           md: "flex-start"
                        }}
                     >
                        <Button
                           startIcon={<Work />}
                        >View Projects</Button>
                        <Button color="accent"
                           startIcon={<Mail />}
                        >Contact</Button>
                     </Stack>
                  </Stack>
               </GridItem>
               <GridItem xs={12} md={4} >
                  <Avatar
                     src="/naxrul.png"
                     size={{
                        xs: 200,
                        md: 300
                     } as any}
                  />
               </GridItem>
            </GridContainer>
         </Container>
      </Stack>
   )
}

export default Hero
