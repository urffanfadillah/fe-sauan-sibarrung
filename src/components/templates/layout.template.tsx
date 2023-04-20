import { Box, Flex } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import useLoadingScreen from '../../hooks/customs/useLoadingScreen';
import { LayoutInterface } from "../../hooks/interfaces/layout.interface";
import LoadingScreen from '../ui/molecules/loadingScreen.molecule';
import Navbar from '../ui/organisms/navbar.organism';

export default function Layout({ title }: LayoutInterface) {
  const loadingScreenState = useLoadingScreen();

  useEffect(() => {
    document.title = title || 'Sauan Sibarrung';
  });

  return (
    <>
      <Flex minH="100vh" flexDirection="column">
        <Navbar />
        <Box w="100%">
          <Outlet />
        </Box>
      </Flex>

      <LoadingScreen {...loadingScreenState} size='sm' />
    </>
  );
}