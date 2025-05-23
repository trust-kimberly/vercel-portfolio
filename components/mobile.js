import Head from 'next/head'
import { Stack, IconButton } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Header from '../components/header'
import { useState } from 'react'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from './footer'
import { X } from 'lucide-react'

const Model = dynamic(
  () => import('../components/model.js'),
  { ssr: false }
)

export default function Mobile () {
  const [blur, toggleBlur] = useState(false)

  return (
    <>
      <Head>
        <title>Kimberly Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack w="100vw" zIndex="5" position="absolute" bottom={0} filter={blur && "auto"} blur={blur && "6px"} opacity={blur && 0.25} p={6}>
        <Header blur={blur} toggleBlur={toggleBlur} />
      </Stack>
      {blur &&
        <>
          <Stack zIndex="10" position="absolute" top={0} right="0" p={2} onClick={() => toggleBlur(false)}>
            <IconButton
              icon={<X size={24} />}
              aria-label="Close"
              variant="ghost"
              onClick={() => toggleBlur(false)}
            />
          </Stack>
          <Stack
            spacing={8}
            p={6}
            h="100vh"
            w="100vw"
            overflow="scroll"
            position="absolute"
            zIndex="7"
            justifyContent="center"
            alignItems="center"
            onClick={() => toggleBlur(false)}
            cursor="grab"
          >
            <Stack spacing={8} width="100%" maxW="600px">
              <Contact />
              <About />
            </Stack>
          </Stack>
        </>
      }
      <Stack h="100vh" w="100vw" filter={blur && "auto"} blur={blur && "6px"} opacity={blur && 0.5}>
        <Model />
      </Stack>
    </>
  )
}
