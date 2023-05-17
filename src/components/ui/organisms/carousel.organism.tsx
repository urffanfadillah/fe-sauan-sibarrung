import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container, Button } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import axios from 'axios';
import { cardSliderType } from '../../../hooks/interfaces/cardslider.interface';
import { Link } from 'react-router-dom';

export default function CaptionCarousel() {    
  const [slider, setSlider] = React.useState<Slider | null>(null);  
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const [cards, setCards] = React.useState<cardSliderType[]>([]);
  const [duration, setDuration] = React.useState<string>('');

  React.useEffect(() => {
    axios.get(`${import.meta.env.VITE_ENDPOINT}slider`)
      .then((response) => {
        setDuration(response.data.slider_duration);
        setCards(response.data.data);
        console.log(parseInt(duration));
      });
  }, []);

  // Settings for the slider
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7 * 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      position={'relative'}
      height={'700px'}
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
          <Link to={card.link} >
            <Box
              key={index}            
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image_url})`}
              height='700px'
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="700px" position="relative" display={'flex'} justifyContent={'center'} alignItems={'end'}>
                {/* <Stack
                  spacing={2}
                  w={'fit-content'}
                  p={8}
                  mb={4}
                  backgroundColor={'#00000080'}
                  rounded={'lg'}
                >
                  {
                    card.link && (
                      <Link to={card.link} target='_blank'>
                        <Button>
                          Kunjungi
                        </Button>
                      </Link>
                    )
                  }
                </Stack> */}
              </Container>
            </Box>
          </Link>
        ))}
      </Slider>
    </Box>
  );
}