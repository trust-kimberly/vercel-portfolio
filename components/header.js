import { Stack, Link, Flex, Text, Box } from "@chakra-ui/react";

export default function Header ({blur, toggleBlur}) {

  return (
    <>
    <Stack spacing={6}>
      <h3>Kimberly Nguyen</h3>
      <Stack>
        <p>A multimedia artist, designer, and developer. I&apos;m interested in the intersection of intimacy and technology, and love reading Craigslist&apos;s Missed Connections.</p>
        <p>Based in Los Angeles, CA.</p>
      </Stack>
      <Flex direction="column">
        <Link onClick={() => toggleBlur(true)}><h3>Info & Contact</h3></Link>
        {/* <Link onClick={() => toggleBlur(true)}><h3>Contact</h3></Link> */}
      </Flex>
      <p className="xs">Site & work © Kimberly Nguyen 2022</p>
    </Stack>
    </>
  )
}
