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
      <p>When I first read a Craigslist’s Missed Connection ad, I was enamored by the way in which ephemeral encounters were given second chances online, and the dialogue between intimacy and technology. Curious about the internet and programming as creative mediums, I began teaching myself to code through the generosity of freecodecamp.com, Codecademy, various devs on YouTube, and the community that is StackOverFlow. The process of designing my own wireframes and learning to build and deploy them myself was as challenging as it was rewarding.</p>
      <p>As a full-time Web Developer at the Metropolitan Area Planning Council, I designed and developed interactive maps and data visualizations to communicate years’ worth of research and data in an accessible way, using Figma, Tableau, Gatsby, Mapbox, React, and Typescript. These apps, sites, and visualizations went on to inform urban planning and policies for 101 cities in Massachusetts, in the areas of housing development, trail conservation, public transit systems, and digital equity. My professional development during this time included certifications in Javascript and React from General Assembly.</p>
      <p>I went on to join Next Music as a Software Engineer, shipping to three products under their portfolio. I designed and built new features using React, React Native, Typescript, and MobX for Sessions Live, reaching the 130K artists and 1.7M fans using the live streaming music platform. In under six weeks, my team and I built and shipped  two new platforms, Next Music and Next Fans, using Next.js, Typescript, MobX, and Chakra UI.</p>
      <p>Currently based in Los Angeles, I am open to local and remote opportunities in web design and development.</p>
      <p className="xs">Site & work © Kimberly Nguyen 2022</p>
    </Stack>
  )
}