// import { extendTheme } from '@chakra-ui/theme-utils';
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({  
  colors: {
    primary: {
      100: '#D1F6EB',
      200: '#A3ECD7',
      300: '#6EDABF',
      400: '#3EC0A4',
      500: '#26A68D',
      600: '#1C8573',
      700: '#1B6A5D',
      800: '#1A554C',
      900: '#1A4740'
    },
    secondary: {
      100: '#CEFCFF',
      200: '#A3F6FE',
      300: '#64EDFC',
      400: '#1EDAF2',
      500: '#02C9E6',
      600: '#0596B5',
      700: '#0B7893',
      800: '#136177',
      900: '#145065'
    },
    neutral: {
      100: '#F7F7F8',
      200: '#EBECED',
      300: '#D9DADD',
      400: '#AFB2B7',
      500: '#797D86',
      600: '#3D3F44',
      700: '#313236',
      800: '#262729',
      900: '#1D1D1F'
    },
    error: '#D22826',
    gradient: {
      primary: 'linear-gradient(139.53deg, #3EC0A4 13.99%, #02C9E6 88.22%)',
      black: 'linear-gradient(118.42deg, #3D3F44 8.46%, #262729 92.19%)',
      white: 'linear-gradient(114.94deg, #FFFFFF 8.94%, #EBECED 91.84%)'
    }
  },
  shadows: {
    sm: '0px 2px 12px rgba(0, 0, 0, 0.07)',
    md: '1px 1px 10px 1px rgba(0, 0, 0, 0.1)',
    lg: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    lightBlue: '0px 0px 20px rgba(100, 237, 252, 0.8)'
  }
});

export default theme;