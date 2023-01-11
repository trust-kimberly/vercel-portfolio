import { useRouter } from 'next/router'
import { data } from '../utils'
import { Stack, Link, Image } from '@chakra-ui/react'
import Footer from '../components/footer'

export default function MobileProject () {
  const router = useRouter()
  const { slug } = router.query
  const project = data.find(elem => elem.slug === slug);

  return(
    <>
      <Stack
        w="100vw"
        minH="100vh"
        p={6}
        bg="lavender"
        spacing={6}
      >
        {project && (
          <>
            <Stack>
              {project.images.map((elem, index) => {
                return <Image key={index} src={elem} alt={index} />
              })}
            </Stack>
            <h2>{project.title}</h2>
            <Stack>
                {project.description.map((elem, index) => {
                  return <p key={index}>{elem}</p>
                })}
              {project.link && <Link href={`https://` + project.link} isExternal>{project.link}</Link>}
            </Stack>
          </>
        )}
        <Link href="/work">All Work</Link>
      </Stack>
      <Footer />
    </>
  )
}
