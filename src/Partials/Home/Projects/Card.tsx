import Launch from '@xanui/icons/Launch'
import Button from '@xanui/ui/Button'
import Image from '@xanui/ui/Image'
import Stack from '@xanui/ui/Stack'
import Text from '@xanui/ui/Text'

type Props = {
   title: string;
   content: string;
   image: string;
   link: string;
}

const Card = ({ title, content, image, link }: Props) => {
   return (
      <Stack
         gap={1}
         radius={1}
         overflow={"hidden"}
         border="1px solid"
         borderColor='divider'
         sx={{
            transition: "all .3s",
            "& img": {
               transition: "all .3s",
            },
            "&:hover": {
               bgcolor: "brand.soft.primary",
               shadow: 15,
               "& img": {
                  transform: "scale(1.1) rotate(4deg)"
               }
            }
         }}
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
            <Text variant="h6">{title}</Text>
            <Text color="text.secondary">
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
      </Stack>
   )
}

export default Card
