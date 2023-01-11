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
    </>
  )
}