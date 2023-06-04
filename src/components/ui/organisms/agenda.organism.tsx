import React, { useEffect, useState } from 'react';
import { Box, Heading, Link, Image, Text, Divider, HStack, Wrap, WrapItem, Container, Button, SimpleGrid } from '@chakra-ui/react';
import { blogAuthorType } from '../../../hooks/interfaces/blogauthor.interface';
import { beritaType } from '../../../hooks/interfaces/berita.interface';
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import axios from "axios";

export const BlogAuthor: React.FC<blogAuthorType> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">      
      <Text fontSize={'xs'}>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Agenda = () => {
  
  const [berita, setBerita] = useState<beritaType[]>([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_ENDPOINT}agenda`)
      .then((response) => {
        setBerita(response.data.data.data);
      });
    }, [])
      
  return (
    <Container maxW={'6xl'}>
      <Heading as="h2" marginTop="5" textAlign={'center'} display={'flex'} gap={2} justifyContent={'center'}>
        Agenda Terbaru <BsFillCalendar3WeekFill />
      </Heading>
      <Divider my="5" />
      <SimpleGrid columns={{base:1, md: 2, lg: 4}} spacing={'16px'}>
          {
          berita.map((result, index) =>
              <Box
                  key={index} 
                  border={'1px solid #333333'} 
                  p={2} 
                  borderRadius={'lg'}
                  backgroundColor={'white'}
                  _hover={{backgroundColor: '#333333', color: 'white'}}
                  cursor={'pointer'}
              >
                  <Box w="100%" overflow={'hidden'}>
                  <Box borderRadius="lg">
                      <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={`/berita/${result.slug}`}>
                      <Image
                          transform="scale(1.0)"
                          src={result.image_url}
                          alt={result.title}
                          objectFit="cover"
                          width="100%"
                          height="240px"
                          transition="0.3s ease-in-out"
                          _hover={{
                          transform: 'scale(1.05)',
                          }}
                      />
                      </Link>
                  </Box>
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }} isTruncated href={`/berita/${result.slug}`}>
                      <Heading fontSize="sm" marginTop="2">
                          {result.title}
                      </Heading>
                      <Text as="p" fontSize="xs" marginTop="2" dangerouslySetInnerHTML={{ __html: result.deskripsi.slice(0, 100) + '...' }} />
                  </Link>
                  <BlogAuthor date={new Date(result.created_at)}/>
                  <Box width={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} my={2}>
                      <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={`/berita/${result.slug}`}>
                      <Button variant={'solid'} backgroundColor={'#333333'} color={'#ffffff'} _hover={{backgroundColor: '#ffffff', color: '#333333'}}>
                          Selengkapnya
                      </Button>
                      </Link>
                  </Box>
                  </Box>
              </Box>
          )
          }
      </SimpleGrid>
    </Container>
  );
};

export default Agenda;