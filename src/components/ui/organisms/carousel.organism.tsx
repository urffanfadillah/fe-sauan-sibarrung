import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import axios from 'axios';
import { cardSliderType } from '../../../hooks/interfaces/cardslider.interface';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {    
  const [slider, setSlider] = React.useState<Slider | null>(null);  
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const [cards, setCards] = React.useState<cardSliderType[]>([]);

  React.useEffect(() => {
    axios.get(`${import.meta.env.VITE_ENDPOINT}slider`)
      .then((response) => {
        setCards(response.data.data.data);
      });
  }, []);

  // const cards = [
  //   {
  //     title: 'Test Slider 1',
  //     text:
  //       "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //   },
  //   {
  //     title: 'Test Slider 2',
  //     text:
  //       "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       'https://plus.unsplash.com/premium_photo-1661771825670-1720428a80ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     title: 'Test Slider 3',
  //     text:
  //       "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  //   },
  // ];

  return (
    <Box
      position={'relative'}
      height={'420px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
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
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color='#ffffff'
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color='#ffffff'
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}            
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image_url})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="420px" position="relative" display={'flex'} justifyContent={'center'} alignItems={'end'}>
              <Stack
                spacing={2}
                w={'fit-content'}
                p={8}
                mb={4}
                backgroundColor={'#00000080'}
                rounded={'lg'}
              >
                <Heading fontSize={{ base: 'sm' }} color="#ffffff">
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'xs'}} color="#ffffff" isTruncated dangerouslySetInnerHTML={{ __html: card.content.slice(0, 100) + '...' }} />
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}