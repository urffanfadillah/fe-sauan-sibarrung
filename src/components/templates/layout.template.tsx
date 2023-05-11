import { Box, Flex } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import useLoadingScreen from '../../hooks/customs/useLoadingScreen';
import Navbar from '../ui/organisms/navbar.organism';
import Footer from '../ui/organisms/footer.organism';

export default function Layout() {
  const loadingScreenState = useLoadingScreen();

  useEffect(() => {
    document.title = 'Sauan Sibarrung';
  });

  return (
    <>
      <Flex minH="100vh" flexDirection="column">
        <Navbar />
        <Box w="100%">
          <Outlet />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}