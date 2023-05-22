import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsFacebook, BsTwitter, BsInstagram, BsGlobe, BsYoutube } from 'react-icons/bs'
import logoCU from '../../../assets/images/Logo_CU.png';
import imgPartner from '../../../assets/images/Footer-Logo Mitra.png';
import imgFooter from '../../../assets/images/Footer-Logo CUSS2.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Flex flexDirection={'column'}>
      <Flex
        as="footer"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="yellow.600"
        color="white"
        mt={32}
    >
      <Box ps={16}>
        <Flex gap={4} alignItems={'start'} flexDirection={'column'}>
            <Image src={imgFooter} w={32} />
            <Flex alignItems="center" gap={4} color={'#000000'}>
              <Box as="a" href="#">
                <Icon as={BsFacebook} w={6} h={6} />
              </Box>        
              <Box as="a" href="#" mr={2}>
                <Icon as={BsInstagram} w={6} h={6} />
              </Box>
              <Box as="a" href="#" mr={2}>
                <Icon as={BsGlobe} w={6} h={6} />
              </Box>
              <Box as="a" href="#" mr={2}>
                <Icon as={BsYoutube} w={6} h={6} />
              </Box>
            </Flex>
        </Flex>
      </Box>

      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Menu
        </Text>
        <Link to={'/about-cu'}>
          <Text fontSize="sm">
            Tentang CU
          </Text>        
        </Link>
        <Link to={'/about-cuss'}>
          <Text fontSize="sm">
            Tentang CUSS
          </Text>        
        </Link>
        <Link to={'/cara-menjadi-anggota'}>
          <Text fontSize="sm">
            Cara Menjadi Anggota
          </Text>        
        </Link>
        <Link to={'/kontak'}>
          <Text fontSize="sm">
            Kontak
          </Text>        
        </Link>
      </Box>
      
      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Kontak
        </Text>
        <Text fontSize="sm">
          Alamat: Jl. Pongtiku No. 477b Mandetek, Makele 91811, Tana Toraja, Sulawesi Selatan
        </Text>
        <Text fontSize="sm">
          Email: cusstt@yahoo.com
        </Text>
        <Text fontSize="sm">
          Telp: 0813 5572 0006
        </Text>
      </Box>      

      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Branding Kami
        </Text>
        <Image src={imgPartner} width={64}  />
      </Box>
      </Flex>
      <Text py={4} textAlign={'center'} fontWeight={'bold'}>Copyright © 2023 Credit Union Sauan Sibarrung</Text>
    </Flex>
  );
};

export default Footer;
