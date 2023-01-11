import { Stack, Image, useMediaQuery } from "@chakra-ui/react"
import { data } from "../utils"
import Footer from "../components/footer"
import Link from "next/link"
import Desktop from "../components/desktop"

export default function Work () {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)')

  return (
    <>
      {isSmallerThan800 ?
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
    </>
  )
}