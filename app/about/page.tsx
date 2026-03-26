import Stack from '@xanui/ui/Stack'
import React from 'react'
import Hero from './Hero'
import About from '@/Partials/Home/About'

const page = () => {
   return (
      <Stack>
         <Hero />
         <Stack
            bgcolor={"background.secondary"}
         >
            <About />
         </Stack>
      </Stack>
   )
}

export default page
