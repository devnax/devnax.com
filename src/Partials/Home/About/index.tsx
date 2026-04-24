// import { useTheme } from '@xanui/core'
// import Avatar from '@xanui/ui/Avatar'
import Container from '@xanui/ui/Container'
import GridContainer from '@xanui/ui/GridContainer'
import GridItem from '@xanui/ui/GridItem'
import Stack from '@xanui/ui/Stack'
import Text from '@xanui/ui/Text'

const About = () => {
   // const theme = useTheme()
   return (
      <Stack
         py={5}
      >
         <Container
            // bgcolor={"surface.light"}
            py={7}
            radius={3}
         >
            <GridContainer spacing={2}>
               <GridItem xs={12} md={5}>
                  {/* <Avatar
                     src="/naxrul.png"
                     size={{
                        xs: 200,
                        md: 300
                     } as any}
                  /> */}
               </GridItem>
               <GridItem xs={12} md={7}>
                  <Stack gap={3}>
                     <Text variant={"h3"}>Building Ideas Into Scalable Digital Products</Text>
                     <Stack gap={2}>
                        <Text color="surface.muted">
                           I’m a full-stack web developer passionate about building scalable, high-performance web applications. I specialize in creating clean, efficient, and user-focused solutions using modern technologies.
                        </Text>
                        <Text color="surface.muted">
                           With a strong focus on architecture and performance, I enjoy solving complex problems and turning ideas into real-world products. I’m constantly exploring new tools and pushing my limits to build better, faster, and smarter systems.
                        </Text>
                     </Stack>
                  </Stack>
               </GridItem>
            </GridContainer>
         </Container>
      </Stack>
   )
}

export default About
