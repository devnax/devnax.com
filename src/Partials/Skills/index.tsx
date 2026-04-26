import Container from "@xanui/ui/Container"
import Stack from "@xanui/ui/Stack"
import Text from "@xanui/ui/Text"
import SkillCard from "./SkillCard"
import techStack from "./techStack"

const Skills = () => {


   return (
      <Stack
         bgcolor="surface.light"
         py={6}
      >
         <Container>

            {/* <Stack gap={6}>
               <Text variant={"h2"}>My Tech Stack</Text>
               <Carousel
                  autoplay
                  onChange={(index) => {
                     setCurrentIndex(index)
                  }}
                  ref={ref}
                  duration={1000}
               >
                  {
                     Object.keys(techStack).map(t => {
                        const val = (techStack as any)[t]
                        return (
                           <Stack
                              key={val.name}
                              gap={1}
                           >
                              <Text color="surface.muted">{val.name}</Text>
                              <Stack
                                 flexRow
                                 gap={1}
                              >
                                 {
                                    val.items.map((t: any) => (
                                       <SkillCard
                                          key={t.name}
                                          icon={t.icon}
                                          name={t.name}
                                       />
                                    ))
                                 }
                              </Stack>
                           </Stack>
                        )
                     })
                  }
               </Carousel>
               <Stack
                  flexRow
                  gap={1}
                  p={1}
                  alignItems={"center"}
                  justifyContent={"center"}
               >
                  {
                     Object.keys(techStack).map((t, idx) => {
                        return <Box
                           key={t}
                           width={12}
                           height={12}
                           bgcolor={currentIndex === idx ? "primary.main" : "surface.lighter"}
                           radius={1}
                           cursor={"pointer"}
                           onClick={() => ref.current?.goTo(idx)}
                        >

                        </Box>
                     })
                  }
               </Stack>
            </Stack> */}


            <Stack gap={3}>
               <Text variant={"h2"}>My Tech Stack</Text>
               <Stack
                  flexRow
                  flexFlow={"wrap"}
                  gap={2}
               >
                  {
                     Object.keys(techStack).map(t => {
                        const val = (techStack as any)[t]
                        return (
                           <Stack
                              key={val.name}
                              gap={1}
                           >
                              <Text color="surface.muted">{val.name}</Text>
                              <Stack
                                 flexRow
                                 flexFlow={"wrap"}
                                 gap={1}
                              >
                                 {
                                    val.items.map((t: any) => (
                                       <SkillCard
                                          key={t.name}
                                          icon={t.icon}
                                          name={t.name}
                                       />
                                    ))
                                 }
                              </Stack>
                           </Stack>
                        )
                     })
                  }

               </Stack>
            </Stack>
         </Container>
      </Stack>
   )
}

export default Skills
