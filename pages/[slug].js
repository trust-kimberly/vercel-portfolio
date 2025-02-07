import { useRouter } from 'next/router'
import { data } from '../utils'
import { Stack, Link, Image, Button, Flex } from '@chakra-ui/react'
import Footer from '../components/footer'

export default function MobileProject () {
  const router = useRouter()
  const { slug } = router.query
  const currentIndex = data.findIndex(elem => elem.slug === slug);
  const project = data[currentIndex];
  
  const prevProject = currentIndex > 0 ? data[currentIndex - 1] : data[data.length - 1];
  const nextProject = currentIndex < data.length - 1 ? data[currentIndex + 1] : data[0];

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
            <Stack>
              <Link href="/work" style={{ fontWeight: 'normal' }}>All Work</Link>
              <Flex justify="space-between" w="100%">
                <Link href={`/${prevProject.slug}`} style={{ fontWeight: 'normal' }}>Previous</Link>
                <Link href={`/${nextProject.slug}`} style={{ fontWeight: 'normal' }}>Next</Link>
              </Flex>
            </Stack>
          </>
        )}
      </Stack>
      <Footer />
    </>
  )
}
