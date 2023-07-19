import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bg="gray.100"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" p={8} bg="white" borderRadius="md">
          <Component {...pageProps} />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
