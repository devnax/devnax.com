import Box from '@xanui/ui/Box'
import Card from '@xanui/ui/Card'
import Image from '@xanui/ui/Image'
import Text from '@xanui/ui/Text'
import React from 'react'

type SkillCardProps = {
   icon: string;
   name: string
}

const SkillCard = ({ icon, name }: SkillCardProps) => {
   return (
      <Card
         variant="outlined"
         display={"flex"}
         flexRow
         alignItems={"center"}
         p={2}
         px={3}
         bgcolor="surface.lighter"
         transition={"all .3s"}
         hover={{
            shadow: 7
         }}
      >
         <Box>
            <Image
               width={40}
               src={icon}
               alt={name}
            />
         </Box>
         <Box>
            <Text variant={"big" as any}>{name}</Text>
         </Box>
      </Card>
   )
}

export default SkillCard
