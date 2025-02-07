import Head from 'next/head'
import { Grid, GridItem, Stack, Flex, Link, Center } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Header from '../components/header'
import { useState } from 'react'
import Project from '../components/project'
import About from '../components/about'
import Contact from '../components/contact'
import { data } from '../utils'

const Model = dynamic(
  () => import('../components/model.js'),
  { ssr: false }
)

const half = Math.ceil(data.length / 2);    
const col1 = data.slice(0, half)
const col2 = data.slice(half)

export default function Desktop () {

  const [blur, toggleBlur] = useState(false)
  const [showProject, toggleShowProject] = useState(false)
  const [project, setProject] = useState()

  const handleProjectNavigation = (newProject) => {
    setProject(newProject);
  }

  return (
    <>
      <Head>
        <title>Kimberly Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showProject ? 
        <Project
          title={project.title}
          link={project.link}
          description={project.description}
          images={project.images}
          slug={project.slug}
          toggleShowProject={toggleShowProject}
          blur={blur}
          toggleBlur={toggleBlur}
          onNavigate={handleProjectNavigation}
        />
        :
        <Stack w="100vw" zIndex="5" position="absolute" bottom={0} filter={blur && "auto"} blur={blur && "6px"} opacity={blur && 0.25}>
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
      <Stack
        h="100vh"
        w="100vw"
        overflow="scroll"
        position="absolute"
        align="center"
        zIndex="7"
        onClick={() => toggleBlur(false)}
        cursor="grab"
        p={8}
      >
        <Stack w="50%" spacing={8}>
          <Contact />
          <About />
        </Stack>
      </Stack>}
      <Stack h="100vh" w="100vw" filter={blur && "auto"} blur={blur && "6px"} opacity={blur && 0.5}>
        <Model />
      </Stack>
    </>
  )
}
