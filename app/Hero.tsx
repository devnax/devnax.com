"use client"
import { alpha, useTheme } from '@xanui/core'
import Container from '@xanui/ui/Container'
import GridContainer from '@xanui/ui/GridContainer'
import GridItem from '@xanui/ui/GridItem'
import Image from '@xanui/ui/Image'
import Stack from '@xanui/ui/Stack'
import Text from '@xanui/ui/Text'

const Hero = () => {
   const theme = useTheme()
   return (
      <Stack
         height={600}
         alignItems={"center"}
         justifyContent={"center"}
         sx={{
            backgroundBlendMode: "overlay",
            background: `linear-gradient(150deg, ${alpha(theme.colors.brand.primary, .2)} 0%, ${theme.colors.background.primary} 30%)`
         }}
      >
         <Container>
            <GridContainer alignItems={"center"}>
               <GridItem xs={12} md={8}>
                  <Text
                     variant={'h1'}
                     fontSize={80}
                     color="brand.primary"
                     fontWeight={"bold"}
                  >Hi, I’m Naxrul Ahmed</Text>
                  <Text
                     variant="h3"
                     fontWeight={"lighter"}
                  >I turn ideas into smooth, beautiful web experiences</Text>
                  <Text
                     fontWeight={"300"}
                  >I create clean, scalable, and user-friendly digital experiences using modern technologies.
                     From idea to production, I turn concepts into real products.</Text>
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
