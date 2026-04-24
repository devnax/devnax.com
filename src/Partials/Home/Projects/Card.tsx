import Launch from '@xanui/icons/Launch'
import Button from '@xanui/ui/Button'
import Image from '@xanui/ui/Image'
import Stack from '@xanui/ui/Stack'
import Card from '@xanui/ui/Card'
import Text from '@xanui/ui/Text'

type Props = {
   title: string;
   content: string;
   image: string;
   link: string;
}

const ProjectCard = ({ title, content, image, link }: Props) => {
   return (
      <Card
         p={0}
         variant="outlined"
      >
         <Stack
            height={180}
            overflow={"hidden"}
         >
            <Image
               src={image}
               alt={title}
            />
         </Stack>
         <Stack p={1} gap={1}>
            <Text variant="h6" fontSize={"big"}>{title}</Text>
            <Text color="surface.muted" fontSize={"button"}>
               {content}
            </Text>
         </Stack>
         <Stack
            flexRow
            justifyContent={"flex-end"}
            p={1}
         >
            <Button
               component={"a"}
               target="_blank"
               href={link}
               variant="text"
               size="small"
               endIcon={<Launch fontSize={16} />}
               textTransform={"capitalize"}
            >View Project</Button>
         </Stack>
      </Card>
   )
}

export default ProjectCard
