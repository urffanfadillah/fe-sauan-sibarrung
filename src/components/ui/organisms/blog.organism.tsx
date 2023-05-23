import React, { useEffect, useState } from 'react';
import { Box, Heading, Link, Image, Text, Divider, HStack, Wrap, WrapItem, Container, Button } from '@chakra-ui/react';
import { blogAuthorType } from '../../../hooks/interfaces/blogauthor.interface';
import { beritaType } from '../../../hooks/interfaces/berita.interface';
import axios from "axios";

export const BlogAuthor: React.FC<blogAuthorType> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">      
      <Text fontSize={'xs'}>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Blog = () => {
  
  const [berita, setBerita] = useState<beritaType[]>([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_ENDPOINT}berita-home`)
      .then((response) => {
        setBerita(response.data.data.data);
      });
    }, [])
    
  const sortedItems = berita.reverse();
  return (
    <Container maxW={'6xl'}>
      <Heading as="h2" marginTop="5">
        Berita Terbaru
      </Heading>
      <Divider marginTop="5" />
      <Wrap marginTop="5" gap={'8'} px={{ base: '4', md: '0' }}>
        {
          sortedItems.map((result, index) =>
            <WrapItem 
              width={{ base: '100%', sm: '45%', md: '45%', lg: '25%' }} 
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
                  <Text as="p" fontSize="xs" marginTop="2" dangerouslySetInnerHTML={{ __html: result.content.slice(0, 100) + '...' }} />
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
            </WrapItem>
          )
        }
      </Wrap>
    </Container>
  );
};

export default Blog;