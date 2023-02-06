import { Stack, Link } from '@chakra-ui/react'

export default function Contact () {
  return (
    <Stack spacing={6}>
      <h1>Contact 💻</h1>
      <Link href="mailto:kimberlynguyen.xyz@gmail.com" isExternal><h2>kimberlynguyen.xyz@gmail.com</h2></Link>
      <Stack spacing={0}>
      <Link href="https://github.com/trust-kimberly" isExternal><h3>GitHub</h3></Link>
      <Link href="https://www.linkedin.com/in/trust-kimberly/" isExternal><h3>LinkedIn</h3></Link>
      {/* <Link href="/Kimberly-Nguyen-CV.pdf" target="_blank"><h3>CV</h3></Link> */}
      </Stack>
    </Stack>
  )
}