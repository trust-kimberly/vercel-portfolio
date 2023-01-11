import { Link, Image, Stack } from "@chakra-ui/react"

export default function MobileHeader () {
  return (
      <Stack p={6} w="100vw">
        <Link href="/">
          <h1>Kimberly Nguyen</h1>
        </Link>
    </Stack>
  )
}