import { Stack, Link, Flex, useMediaQuery } from "@chakra-ui/react";

export default function Header ({toggleBlur}) {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)')

  return (
    <>
    <Stack spacing={6}>
      <h3>Kimberly Nguyen</h3>
      <Stack>
        <p>A multimedia artist, designer, and developer. I&apos;m interested in the intersection of intimacy and technology, and love reading Craigslist&apos;s Missed Connections.</p>
        <p>Based in Los Angeles, CA.</p>
      </Stack>
      <Flex direction="column">
        {isSmallerThan800 && <Link href="/work"><h3>Work</h3></Link> }
        <Link onClick={() => toggleBlur(true)}><h3>Contact & Info</h3></Link>
      </Flex>
      <p className="xs">Site & work © Kimberly Nguyen 2022</p>
    </Stack>
    </>
  )
}
