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
  () => import('../components/Model'),
  { ssr: false }
)

const data = [
  {
    title: "Next Music",
    description: "Next Music description",
    images: ["/joshuatree.jpg", "/joshuatree.jpg", "/joshuatree.jpg", "/joshuatree.jpg", "/joshuatree.jpg"],
  },
  {
    title: "Lexi",
    description: "Lexi description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Jack",
    description: "Lexi description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Rethinking",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Digital Equity Plan",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Stone of Sex",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Creative Archaeology",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Arthur's",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Inventory",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "A Long Shot",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "In Case of Emergency",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "To Bear",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Chicken Studies",
    description: "description",
    images: ["/opossum.jpg"],
  },
  {
    title: "Onion TV",
    description: "description",
    images: ["/opossum.jpg"],
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
        <Stack w="50%">
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
