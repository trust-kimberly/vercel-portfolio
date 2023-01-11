import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Container, Grid, GridItem, Stack, Flex, Image, VStack, Heading, Text, Tag, HStack, Button, Link, Wrap, Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Header from '../components/header'
import ChakraCarousel from '../components/carousel'
import { ST } from 'next/dist/shared/lib/utils'

export default function Project ({title, link, description, images, toggleShowProject, blur, toggleBlur}) {
  return (
      <Stack h="100vh" maxH="100vh" w="100vw" zIndex="5" position="absolute" filter={blur && "auto"} blur={blur && "6px"} opacity={blur && 0.25}>
        <Grid
          maxH="100vh"
          height="100vh"
          templateRows='1fr auto'
          templateColumns='repeat(4, 1fr)'
          bg="transparent"
        >
          <GridItem
          rowSpan={1}
          colSpan={4}
          bg="transparent"
          overflow="scroll"
          display="flex"
          gap={2}
          mt={8}
          className="scrollbar"
          >
            {images.map((elem, index) =>
              <Image
                key={index}
                src={elem}
                alt={index}
                boxSize="100%"
                objectFit="contain"
              />
            )}
          </GridItem>
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
              <h1>{title}</h1>
              <Link onClick={() => toggleShowProject()} mt="14px"><h3>All Work</h3></Link>
              {/* <h1>&nbsp;</h1> */}
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              
            </Flex>
          </GridItem>
          <GridItem
            rowSpan={1}
            colStart={4}
            colEnd={5}
            p={8}
          >
            <Stack>
              {description.map((elem, index) => {
                return <p key={index}>{elem}</p>
              })}
              {link && <Link href={`https://` + link} isExternal>{link}</Link>}
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
  )
}