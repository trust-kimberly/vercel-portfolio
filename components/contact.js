import { Stack, Link } from '@chakra-ui/react'

export default function Contact () {
  return (
    <Stack spacing={6}>
      <h3>💻 Contact</h3>
      <Stack spacing={0}>
      <Link href="mailto:kimberlynguyen.xyz@gmail.com" isExternal><p>Email</p></Link>
      <Link href="https://www.instagram.com/trust.kimberly/" isExternal><p>Instagram</p></Link>
      <Link href="https://www.linkedin.com/in/trust-kimberly/" isExternal><p>LinkedIn</p></Link>
      <Link href="https://github.com/trust-kimberly" isExternal><p>GitHub</p></Link>
      </Stack>
    </Stack>
  )
}