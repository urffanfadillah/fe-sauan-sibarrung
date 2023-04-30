import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  export default function VisiMisiNilai() {
    return (
      <Box py={16}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Visi Misi Nilai Inti</Heading>
            <Heading fontSize={'xl'} color={"orange.400"}>CU Sauan Sibarrung</Heading>            
        </Stack>

        <HStack spacing={4} as={Container} maxW={'6xl'} my={10} h={160}>
            <Box
                maxW={{ base: 'full' }}
                w={'full'}
                h={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}
                backgroundColor={"#ffffff"}
                border={"1px solid #e7e7e7"}
            >
                <Stack align={'center'} spacing={4}>
                    <Box mt={2}>
                        <Heading size="md" textAlign={"center"}>Misi</Heading>
                        <Text mt={1} fontSize={'sm'} textAlign={"center"}>
                            Meningkatkan Kualitas Hidup Anggota Berbasis Komunitas yang ramah Lingkungan melalui Pemberdayaan Sosial, Ekonomi dan Teknologi secara berkelanjutan
                        </Text>
                    </Box>
                </Stack>
            </Box>
            <Box
                maxW={{ base: 'full' }}
                w={'full'}
                h={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}
                backgroundColor={"#ffffff"}
                border={"1px solid #e7e7e7"}
            >
                <Stack align={'center'} spacing={4}>
                    <Box mt={2}>
                        <Heading size="md" textAlign={"center"}>Visi</Heading>
                        <Text mt={1} fontSize={'sm'} textAlign={"center"}>
                            Menjadi lembaga pemberdayaan hidup masyarakat toraja yang tangguh dan terpercaya demi kesejahteraan anggota
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </HStack>

        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Nilai Inti</Heading>   
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                    <Text fontWeight={600}>Bulaan Tasak (Hidup Sejati)</Text>
                </VStack>
            </HStack>
            <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                    <Text fontWeight={600}>Kinaa (Bijaksana)</Text>
                </VStack>
            </HStack>
            <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                    <Text fontWeight={600}>Sikamasean (Berbagi)</Text>
                </VStack>
            </HStack>
            <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                    <Text fontWeight={600}>Sangserekan (Bersama dan Bersaudara)</Text>
                </VStack>
            </HStack>
            <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                    <Text fontWeight={600}>Mawatang (Ulet)</Text>
                </VStack>
            </HStack>
            <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                    <Text fontWeight={600}>Matarru (Kreatif)</Text>
                </VStack>
            </HStack>
            <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                    <Text fontWeight={600}>Ma'patongan (Beriman & Penuh Harapan)</Text>
                </VStack>
            </HStack>
            <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                    <Text fontWeight={600}>Madarana Lako Daena (Ramah Lingkungan)</Text>
                </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }