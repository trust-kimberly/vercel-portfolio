import { Stack } from '@chakra-ui/react'

export default function About () {
  return (
    <Stack spacing={6}>
      <h1>Info 💌</h1>
      <Stack spacing={0}>
        <p>MFA, Rhode Island School of Design</p>
        <p>Javascript & React, General Assembly</p>
        <p>BA, New York University</p>
      </Stack>
      <p>Curious about programming as a creative medium, I began teaching myself to code through the generosity of freecodecamp.com, Codecademy, YouTube, and the community that is StackOverFlow. Freelancing as a web designer and developer, I found the process of designing my own wireframes to build and deploy as exciting as it was fulfilling.</p>
      <p>Currently based in Los Angeles, I am open to local and remote opportunities in web design, product design, and frontend development.</p>
      <p className="xs">Site & work © Kimberly Nguyen 2022</p>
    </Stack>
  )
}