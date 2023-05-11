import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsFacebook, BsTwitter, BsInstagram, BsGlobe, BsYoutube } from 'react-icons/bs'
import logoCU from '../../../assets/images/Logo_CU.png';
import imgPartner from '../../../assets/images/Footer-Logo Mitra.png';

const Footer = () => {
  return (
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
      <Box>
        <Flex gap={4} alignItems={'start'} flexDirection={'column'}>
            <Image src={logoCU} w={16} />
            <Text fontWeight="bold" fontSize="sm">
                Credit Union Sauan Sibarrung
            </Text>
            <Flex alignItems="center" gap={4}>
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
          Partner Kami
        </Text>
        <Image src={imgPartner} width={64}  />
      </Box>
    </Flex>
  );
};

export default Footer;
