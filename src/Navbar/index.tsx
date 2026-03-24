"use client"
import Container from "@xanui/ui/Container"
import Stack from "@xanui/ui/Stack"
import LargeNav from "./Large"
import { useBreakpoint } from "@xanui/core"
import SmallNav from "./Small"

const Navbar = () => {
   const bp = useBreakpoint()
   const isMobile = bp.isDown("md")
   return (
      <Stack
         height={60}
         alignItems={"center"}
         flexRow
      >
         <Container>
            {isMobile ? <SmallNav /> : <LargeNav />}
         </Container>
      </Stack>
   )
}

export default Navbar
