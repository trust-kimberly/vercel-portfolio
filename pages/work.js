<<<<<<< HEAD
import { Stack, Image, useMediaQuery } from "@chakra-ui/react"
import { data } from "../utils"
import Footer from "../components/footer"
import Link from "next/link"
import Desktop from "../components/desktop"

export default function Work () {
  const [isSmallerThan400] = useMediaQuery('(max-width: 400px)')

  return (
    <>
      {isSmallerThan400 ?
        <>
          <Stack
            w="100vw"
            p={6}
            bg="lavender"
          >
            {data.map((elem, index) => {
              return <Link key={index} href={`/` + elem.slug}><Image src={elem.images[0]} alt={index} /></Link> 
            })}
          </Stack>
          <Footer />
        </>
        :
        <Desktop />
      }
=======
import { Stack, Image, HStack } from "@chakra-ui/react"
import { data } from "../utils"
import Footer from "../components/footer"
import Link from "next/link"

export default function Work () {
  return (
    <>
      <Stack
        w="100vw"
        p={6}
        bg="lavender"
      >
        {data.map((elem, index) => {
          return <Link key={index} href={`/` + elem.slug}><Image src={elem.images[0]} alt={index} /></Link> 
        })}
      </Stack>
      <Footer />
>>>>>>> d93eb95968445dc1583cbae8225ebf9c3bdc4724
    </>
  )
}