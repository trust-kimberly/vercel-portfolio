import { Link, Image, Stack } from "@chakra-ui/react"

export default function Footer () {
  return (
      <Stack p={6} align="end" bottom={0} right="0" position="fixed">
        <Link href="/">
          <Image
            src="/icon.png"
            boxSize="50px"
            objectFit="contain"
            alt="Japanese Ogre Emoji"
          />
        </Link>
    </Stack>
  )
}