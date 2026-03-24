"use client"
import Mail from '@xanui/icons/Mail'
import Work from '@xanui/icons/Work'
import Button from '@xanui/ui/Button'
import Container from '@xanui/ui/Container'
import GridContainer from '@xanui/ui/GridContainer'
import GridItem from '@xanui/ui/GridItem'
import Image from '@xanui/ui/Image'
import Stack from '@xanui/ui/Stack'
import Text from '@xanui/ui/Text'

const Hero = () => {
   return (
      <Stack
         py={10}
         alignItems={"center"}
         justifyContent={"center"}

      >
         <Container>
            <GridContainer alignItems={"center"}>
               <GridItem xs={12} md={8}>
                  <Stack gap={3}>
                     <Text
                        variant={'h1'}
                        fontSize={{
                           xs: 50,
                           md: 80
                        }}
                        color="brand.primary"
                        fontWeight={"bold"}
                        lineHeight={1.2}
                     >Hi, I’m Naxrul Ahmed</Text>
                     <Text
                        variant="h3"
                        fontWeight={"lighter"}
                     >I turn ideas into smooth, beautiful web experiences</Text>
                     <Stack
                        flexRow
                        gap={2}
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
                  <Image
                     src="/naxrul.png"
                     alt=""
                     width={300}
                  />
               </GridItem>
            </GridContainer>
         </Container>
      </Stack>
   )
}

export default Hero
