import { Box, Flex, SimpleGrid, Container } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import useLoadingScreen from '../../hooks/customs/useLoadingScreen';
import { LayoutInterface } from "../../hooks/interfaces/layout.interface";
import LoadingScreen from '../ui/molecules/loadingScreen.molecule';
import Navbar from '../ui/organisms/navbar.organism';

export default function ProfilLayout({ title }: LayoutInterface) {
  const loadingScreenState = useLoadingScreen();

  useEffect(() => {
    document.title = title || 'Sauan Sibarrung';
  });

  return (
    <>
      <Flex minH="100vh" flexDirection="column">
        <Navbar />
        <Container maxW={"6xl"}>
            <Box w={"100%"}>
                <Outlet />
            </Box>
        </Container>
      </Flex>

      <LoadingScreen {...loadingScreenState} size='sm' />
    </>
  );
}