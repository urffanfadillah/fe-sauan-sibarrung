import { Box, Container, Flex, Heading, Image, Stack, Text, Link, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { cardTestimoniType } from '../../../hooks/interfaces/cardtestimoni.interface';

interface CardProps {
  heading: string;
  description: string;
  image_url: string;
  slug: string;
}

const Card = ({ heading, description, image_url, slug }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '480px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      backgroundColor={"#ffffff"}
      border={"1px solid #e7e7e7"}
    >
      <Stack align={'center'} spacing={4}>
        <Image
          src={image_url}
          w={16}
          h={16}
          rounded={'full'}
        />
        <Box mt={2}>
          <Heading size="md" textAlign={"center"}>{heading}</Heading>
          <Text mt={1} fontSize={'sm'} textAlign={"center"} dangerouslySetInnerHTML={{ __html: description.slice(0, 100) + '...' }} />
          <Link href={`/kisah-sukses/${slug}`}>
            <Button w='full' mt={4}>Read More</Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
  
export default function Feature() {

  const [testimoni, setTestimoni] = useState<cardTestimoniType[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_ENDPOINT}kisah-sukses-home`)
      .then((response) => {
        setTestimoni(response.data.data.data)
      });
  }, [])

  return (
    <Box py={16} backgroundColor={"#f0f0f0"}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Kisah Sukses
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>Testimoni</Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {
            testimoni.map((result, index) => 
              <>
                <Card key={index} heading={result.title} image_url={result.image_url} description={result.content} slug={result.slug} />
              </>
            )
          }
        </Flex>
      </Container>
    </Box>
  );
}