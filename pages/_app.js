import '../styles/globals.css'
import { ChakraProvider, ComponentStyleConfig, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: "helvetica",
        color: "black",
      },
      h1: {
        fontSize: "30px",
        lineHeight: "34px",
      },
      h2: {
        fontSize: "20px",
        lineHeight: "24px"
      },
      h3: {
        fontSize: "18px",
        lineHeight: "22px"
      },
      // a: {
      //   color: "lavenderblush",
      // },
      p: {
        fontSize: "16px",
        lineHeight: "20px",
      },
      "p.xs": {
        fontSize: "12px",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          color: "lavender",
          textDecoration: "none",
          transitionDuration: "1s"
        },
      }
    }
  }
})

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
