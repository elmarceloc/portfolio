import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#009974',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('#009974', '#009974')(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
}

const colors = {
  grassTeal: '#009974',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
