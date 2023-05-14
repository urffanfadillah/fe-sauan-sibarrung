import { Box, Container, Flex, Heading, Image, Stack, Text, Link, Button, HStack } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { cardTestimoniType } from '../../../hooks/interfaces/cardtestimoni.interface';
import Slider from 'react-slick';

interface CardProps {
  heading: string;
  description: string;
  image_url: string;
  slug: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 3000,
};

const Card = ({ heading, description, image_url, slug }: CardProps) => {
  return (
    <>
      <Box
        maxW={{ base: 'full' }}        
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        backgroundColor={"#ffffff"}
        border={"1px solid #e7e7e7"}
      >
        <HStack align={'center'} spacing={4}>
          <Box mt={2}>
            <Heading size="md" textAlign={"center"}>{heading}</Heading>
            <Text mt={1} fontSize={'sm'} textAlign={"center"} dangerouslySetInnerHTML={{ __html: description.slice(0, 100) + '...' }} />
            <Link href={`/kisah-sukses/${slug}`}>
              <Button w='full' mt={4}>Read More</Button>
            </Link>
          </Box>
          <Image
            src={image_url}
            w={48}
            h={48}
            rounded={'lg'}
          />
        </HStack>
      </Box>
    </>
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
    <>
    <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Box py={4} backgroundColor={"#f0f0f0"}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} textAlign={'center'}>
          Testimonials
        </Heading>

        <Container p={10}>
          <Slider {...settings}>
            {
              testimoni.map((result, index) =>               
                <Card key={index} heading={result.title} image_url={result.image_url} description={result.content} slug={result.slug} />
              )
            }
          </Slider>
        </Container>
      </Box>
    </>
  );
}