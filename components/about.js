import { Stack } from '@chakra-ui/react'

export default function About () {
  return (
    <Stack spacing={6}>
      <h1>Info 💌</h1>
      <Stack spacing={0}>
        <p>BA, New York University</p>
        <p>MFA, Rhode Island School of Design</p>
        <p>Javascript & React, General Assembly</p>
      </Stack>
      <p>Curious about programming as a creative medium, I began teaching myself to code through the generosity of freecodecamp.com, Codecademy, YouTube, and the community that is StackOverFlow. Freelancing as a web designer and developer, I found the process of designing my own wireframes to build and deploy as exciting as it was fulfilling.</p>
      <p>As a Web Developer at the Metropolitan Area Planning Council, I designed and developed interactive maps and data visualizations to communicate years’ worth of urban planning research, using Figma, Tableau, Gatsby, Mapbox, React, and Typescript. These apps, sites, and visualizations went on to inform urban planning and policies for 101 cities in Massachusetts, in the areas of housing development, public transit systems, and digital equity.</p>
      <p>I went on to join Next Music as a Software Engineer, shipping to three products under their portfolio. I designed and built new features using React, React Native, Typescript, and MobX for Sessions Live, reaching the 130K artists and 1.7M fans using the live streaming music platform. In under six weeks, my team and I built and shipped  two new platforms, Next Music and Next Fans, using Next.js, Typescript, MobX, and Chakra UI.</p>
      <p>Currently based in Los Angeles, I am open to local and remote opportunities in web design and development.</p>
      <p className="xs">Site & work © Kimberly Nguyen 2022</p>
    </Stack>
  )
}