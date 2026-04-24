import { Transition } from '@xanui/core'
import Container from '@xanui/ui/Container'
import Stack from '@xanui/ui/Stack'
import Text from '@xanui/ui/Text'

const Hero = () => {
   return (
      <Stack>
         <Container>
            <Stack
               py={10}
            >
               <Transition variant={"fadeDown"} open duration={1500}>
                  <Text
                     textAlign={{
                        xs: "center",
                        md: "left"
                     }}
                     variant={'h1'}
                     fontSize={{
                        xs: 40,
                        md: 60
                     }}
                     color="primary.main"
                     fontWeight={"bold"}
                  >About Me</Text>
               </Transition>
               <Transition variant={"fadeUp"} open duration={1500}>
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
                  >
                     Discover my journey, skills, and passion for building modern web applications.
                  </Text>
               </Transition>
            </Stack>
         </Container>
      </Stack>
   )
}

export default Hero
