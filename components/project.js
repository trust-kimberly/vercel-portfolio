import { Grid, GridItem, Stack, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import Header from '../components/header'
import { data } from '../utils'

export default function Project ({title, link, description, images, toggleShowProject, blur, toggleBlur, slug, onNavigate}) {
  const [isSmallerThan1400] = useMediaQuery('(max-width: 1400px)')
  
  const currentIndex = data.findIndex(elem => elem.slug === slug);
  const prevProject = currentIndex > 0 ? data[currentIndex - 1] : data[data.length - 1];
  const nextProject = currentIndex < data.length - 1 ? data[currentIndex + 1] : data[0];

  const handleNavigation = (project) => {
    if (onNavigate) {
      onNavigate(project);
    }
  }

  return (
      <Stack
        h="100vh"
        maxH="100vh"
        w="100vw"
        zIndex="5"
        position="absolute"
        filter={blur && "auto"}
        blur={blur && "6px"}
        opacity={blur && 0.25}
      >
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
                loading="lazy"
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
              <Link onClick={() => toggleShowProject()} mt="12px"><h3>All Work</h3></Link>
              <Flex justify="space-between" w="100%" mt={2}>
                <Link 
                  onClick={() => handleNavigation(prevProject)}
                  style={{ cursor: 'pointer' }}
                >
                  <h3>Previous</h3>
                </Link>
                <Link 
                  onClick={() => handleNavigation(nextProject)}
                  style={{ cursor: 'pointer' }}
                >
                  <h3>Next</h3>
                </Link>
              </Flex>
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              {isSmallerThan1400 && <h1>&nbsp;</h1>}
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