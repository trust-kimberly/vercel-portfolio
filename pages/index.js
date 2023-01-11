import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Container, Grid, GridItem, Stack, Flex, Image, VStack, Heading, Text, Tag, HStack, Button, Link, Wrap, useDisclosure, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, Lorem, ModalFooter, ModalContent, Box, Center } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Header from '../components/header'
import ChakraCarousel from '../components/carousel'
import { useState } from 'react'
import Project from '../components/project'
import About from '../components/about'
import Contact from '../components/contact'
import { ST } from 'next/dist/shared/lib/utils'

const inter = Inter({ subsets: ['latin'] })

const Model = dynamic(
  () => import('../components/model.js'),
  { ssr: false }
)

const data = [
  {
    title: "Next Music",
    description: [
      "2022",
      "As a Software Engineer at Next Music, designed, built, and shipped new features to Sessions Live, Next Music, and Next fans, reaching 130K artists and 1.7M fans",
      "Built with React, React Native, Typescript, MobX, Next.js, Vercel, and Chakra UI"
    ],
    images: ["/sessions.jpg", "/nextmusic.png", "/nextmusic-login.png"],
  },
  {
    title: "Lexi",
    link: "lexiwimberly.com",
    description: [
      "2021",
      "Designed and built for LA-based photographer Lexi Wimberly"
    ],
    images: ["/lexi.png"],
  },
  {
    title: "Jack",
    link: "jackhallenbeck.com",
    description: [
      "2021",
      "Designed and built for LA-based audio engineer Jack Hallenbeck"
    ],
    images: ["/jack.png"],
  },
  {
    title: "Rethinking",
    link: "mapc.github.io/retrofitting-search-map-embed",
    description: [
      "2021",
      "Created an interactive visualization for the Metropolitan Area Planning Council's work on revitalization in the suburbs",
      "Built and deployed using Typescript, Mapbox API, GraphiQL, and Gatsby"
    ],
    images: ["/rethinking.png"],
  },
  {
    title: "Digital Equity Plan",
    link: "mapc.github.io/digital-equity-report",
    description: [
      "2022",
      "Designed and developed a digital toolkit alongside Metropolitan Area Planning Council's civic technologists and data analysts to share resources and inform decisions around municipal broadband access",
      "The plan included over 30 interactive data visualizations created using Tableau and Mapbox, and the site itself was built and deployed using React and Gatsby"
    ],
    images: ["/digital-equity.png"],
  },
  {
    title: "Stone of Sex",
    link: "stoneofsex.xyz",
    description: [
      "2020",
      "Collaborated with stone cutter Hamzat Raheem to create a digital space for his sculpture, Stone of Sex"
    ],
    images: ["/stone.png"],
  },
  {
    title: "Creative Archaeology",
    link: "creativearchaeology.xyz",
    description: [
      "2022",
      "Collaborated with designer Bobby Joe Smith to create a digital accompaniment for Hamzat Raheem's work presented at the Friends With Benefits Festival 2022"
    ],
    images: ["/archaeology.png"],
  },
  {
    title: "Arthur's",
    description: [
      "2022",
      "WIP",
      "Collaborated with designer Bobby Joe Smith on site and branding for interior designer Nick Spain of Arthur's Studio"
    ],
    images: ["/arthurs.png", "/arthurs2.png"],
  },
  {
    title: "Inventory",
    link: "trust-kimberly.github.io/stickie",
    description: [
      "2020",
      "Two years spent in Providence, RI - an inventory of stickie notes and audio saved on my phone from September 2018 to May 2020"
    ],
    images: ["/inventory.png", "/inventory2.png"],
  },
  {
    title: "A Long Shot",
    link: "alongshot.xyz",
    description: [
      "2020",
      "A digital thesis and archive"
    ],
    images: ["/longshot6.png", "/longshot4.png", "/longshot2.png", "/longshot5.png"],
  },
  {
    title: "In Case of Emergency",
    description: [
      "2020",
      "Double-sided shopping list, his socks, lingerie, whiskey bottle, antibiotics, empty baggie, mirror"
    ],
    images: ["/emergency.jpg"],
  },
  {
    title: "To Bear",
    description: [
      "2018",
      "Chili seeds, bodily fluids, soil, grow light, audio, plaster"
    ],
    images: ["/tobear.jpg"],
  },
  {
    title: "Chicken Studies",
    description: [
      "2016",
      "Kilncast glass"
    ],
    images: ["/chickenstudies.jpg", "/chickenstudies2.jpg", "/chickenstudies3.jpg", "/chickenstudies4.jpg"],
  },
  {
    title: "Onion TV",
    description: [
      "2020",
      "Raw onion, video"
    ],
    images: ["/oniontv.png"],
    // videos: ["/oniontv.mov"]
  },
  
]

const half = Math.ceil(data.length / 2);    

const col1 = data.slice(0, half)
const col2 = data.slice(half)

export default function Home() {

  const [blur, toggleBlur] = useState(false)

  const [showProject, toggleShowProject] = useState(false)
  const [project, setProject] = useState()

  return (
    <>
      <Head>
        <title>Kimberly Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Landing / All Projects */}

      {showProject ? 
      <Project
      title={project.title}
      link={project.link}
      description={project.description}
      images={project.images}
      toggleShowProject={toggleShowProject}
      blur={blur}
      toggleBlur={toggleBlur}
      />
      :
      <Stack w="100vw" zIndex="5" position="absolute" bottom={0} filter={blur && "auto"} blur={blur && "6px"} opacity={blur && 0.5}>
      <Grid
        templateRows='repeat(1, auto)'
        templateColumns='repeat(4, 1fr)'
        bg="transparent"
      >
        <GridItem
          rowSpan={1}
          colSpan={1}
          p={8}
        >
          <Header blur={blur} toggleBlur={toggleBlur} />
        </GridItem>
        <GridItem
          rowSpan={1}
          colStart={3}
          colEnd={4}
          p={8}
        >
          <Flex
            direction="column"
          >
            {col1.map((elem, index) => {
            return <Link key={index} onClick={() => {
              toggleShowProject(true)
              setProject(elem)
            }}><h1>{elem.title}</h1></Link>
            })}
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={1}
          colStart={4}
          colEnd={5}
          p={8}
        >
          <Flex
            direction="column"
          >
            {col2.map((elem, index) => {
              return <Link key={index} onClick={() => {
                toggleShowProject(true)
                setProject(elem)
              }}><h1>{elem.title}</h1></Link>
            })}
          </Flex>
        </GridItem>
      </Grid>
    </Stack>
      }

      {blur &&
      <Center h="100vh" w="100vw" position="absolute" zIndex="7" onClick={() => toggleBlur(false)} cursor="grab">
        <Stack w="50%" spacing={8}>
          <About />
          <Contact />
        </Stack>
      </Center>}

      <Stack h="100vh" w="100vw" filter={blur && "auto"} blur={blur && "6px"} opacity={blur && 0.5}>
        <Model />
      </Stack>

    </>
  )
}
