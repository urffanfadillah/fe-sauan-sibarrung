import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { cardTestimoniType } from '../../../hooks/interfaces/cardtestimoni.interface';
import Slider from 'react-slick';
import { ImQuotesRight } from "react-icons/im";

interface CardProps {  
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

const Card = ({ description, image_url, slug }: CardProps) => {
  return (
    <>
      <Box
        maxW={{ base: '6xl' }}
        overflow="hidden"
        h={{base: 'fit-content', md: 420}}
        display={'flex'}
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent={'center'}
        alignItems={'center'}
        gap={6}
        backgroundColor={'#f0f0f0'}
        borderRadius={'lg'}
        position={'relative'}
        px={{base:4, md:16}}
      >
        <Box p={4}>
          <Image
            src={image_url}
            maxW={{base: 'full', md: '240px'}}
            h={{base: '160px', md: '240px'}}
            rounded={'lg'}
          />
        </Box>
        <Box px={{base:2, md:8}}>
          <Text mt={1} fontSize={'md'} dangerouslySetInnerHTML={{ __html: description }} />
        </Box>
        <Box
          position={{base:"relative", md: "absolute"}}
          bottom="0"
          right="0"
          ps={{base: 8, md: 0}}
          pb={8}
          pe={8}
        >
          <ImQuotesRight fontSize={64} />
        </Box>
      </Box>
    </>
  );
};
  
export default function Feature() {

  const [testimoni, setTestimoni] = useState<cardTestimoniType[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_ENDPOINT}testimonial-home`)
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
      <Box py={4} maxW={'full'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} textAlign={'center'}>
          Testimonials
        </Heading>

        <Container py={8} px={6} border={'transparent'} maxW={'full'}>
          <Slider {...settings}>
            {
              testimoni.map((result, index) =>               
                <Card key={index} image_url={result.image_url} description={result.content} slug={result.slug} />
              )
            }
          </Slider>
        </Container>
      </Box>
    </>
  );
}