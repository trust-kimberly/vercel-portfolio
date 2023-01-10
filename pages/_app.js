import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: "helvetica",
        color: "black"
      },
      h1: {
        fontSize: "32px",
        lineHeight: "36px",
      },
      h2: {
        fontSize: "20px",
      },
      h3: {
        fontSize: "18px",
        lineHeight: "22px"
      },
      a: {
        color: "lavenderblush",
      },
      p: {
        fontSize: "16px",
        lineHeight: "20px",
      },
      "p.xs": {
        fontSize: "12px",
      }
    },
  },
})


function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
