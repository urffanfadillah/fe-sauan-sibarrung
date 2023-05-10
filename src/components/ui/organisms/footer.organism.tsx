import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import logoCU from '../../../assets/images/Logo_CU.png';

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.900"
      color="white"
      mt={32}
    >
      <Box>
        <Flex gap={4} alignItems={'center'}>
            <Image src={logoCU} w={10} />
            <Text fontWeight="bold" fontSize="lg">
                Credit Union Sauan Sibarrung
            </Text>
        </Flex>
        <Text fontSize="sm" mt={2}>
            WVG9+WHW, Tambunan, Kec. Makale Utara, Kabupaten Tana Toraja, Sulawesi Selatan 91812
        </Text>
      </Box>

      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Kontak
        </Text>
        <Text fontSize="sm">
          Email: example@example.com
        </Text>
      </Box>

      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Ikuti Kami
        </Text>
        <Flex alignItems="center">
          <Box as="a" href="#" mr={2}>
            <Icon as={BsTwitter} w={6} h={6} />
          </Box>
          <Box as="a" href="#">
            <Icon as={BsFacebook} w={6} h={6} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
