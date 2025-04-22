import { Link, Image, Stack } from "@chakra-ui/react"

export default function Footer () {
  return (
      <Stack p={6} align="end" top={0} right="0" position="fixed">
        <Link href="/">
        <h1>🏠</h1>
        </Link>
    </Stack>
  )
}