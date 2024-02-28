
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        // bg: '#1a202c',
        // color: 'white',
        
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
})

export default theme;