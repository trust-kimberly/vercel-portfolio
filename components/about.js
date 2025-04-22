import { Stack } from '@chakra-ui/react'

export default function About () {
  return (
    <Stack spacing={6}>
      <h3>💌 Info</h3>
      <Stack spacing={0}>
        <p>MFA, Rhode Island School of Design</p>
        <p>BA, New York University</p>
      </Stack>
      {/* <p>Curious about programming as a creative medium, I began teaching myself to code through the generosity of freecodecamp.com, Codecademy, YouTube, and the community that is StackOverFlow. Freelancing as a web designer and developer, I found the process of designing my own wireframes to build and deploy as exciting as it was fulfilling.</p> */}
      <p>A multimedia artist, designer, and developer based in Los Angeles, I'm currently open to local and remote opportunities in UI/UX design, web design, and creative coding.</p>
      <p className="xs">Site & work © Kimberly Nguyen 2022</p>
    </Stack>
  )
}