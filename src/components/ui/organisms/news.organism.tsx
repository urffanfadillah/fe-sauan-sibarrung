import React, { useEffect, useState } from 'react';
import { Box, Heading, Link, Image, Text, Divider, HStack, Wrap, WrapItem, Container, Flex, Button } from '@chakra-ui/react';
import { blogAuthorType } from '../../../hooks/interfaces/blogauthor.interface';
import { beritaType } from '../../../hooks/interfaces/berita.interface';
import axios from "axios";

export const BlogAuthor: React.FC<blogAuthorType> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

interface linkBeritaType {
    url: any;
    label: any;
    active: Boolean;
}

const News = () => {
  
    const [berita, setBerita] = useState<beritaType[]>([]);
    const [pagesUrl, setPagesUrl] = useState<linkBeritaType[]>([]);
    const [beritaEndpoint, setBeritaEndpoint] = useState('berita-home');

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}${beritaEndpoint}`)
        .then((response) => {
            setBerita(response.data.data.data);
            setPagesUrl(response.data.data.links);
        });
    }, []);

    function changeBeritaEndpoint(endpoint: string) {
        setBeritaEndpoint(endpoint)
    }

    return (
        <Container maxW={'7xl'} p="12">
            <Heading as="h2" marginTop="5">
                CU News
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">
                {
                berita.map((result, index) =>
                    <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }} key={index}>
                    <Box w="100%">
                        <Box borderRadius="lg" overflow="hidden">
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
                        <Heading fontSize="xl" marginTop="2"  overflow={'hidden'}>
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }} isTruncated href={`/berita/${result.slug}`}>
                            {result.title}
                        </Link>
                        </Heading>
                        <Text as="p" fontSize="md" marginTop="2" dangerouslySetInnerHTML={{ __html: result.content.slice(0, 100) + '...' }} />
                        <BlogAuthor
                        date={new Date(result.created_at)}
                        />
                    </Box>
                    </WrapItem>
                )
                }
            </Wrap>
            <Flex gap={6} my={4}>
                {
                    pagesUrl.map((result, index) =>                        
                        <Button onClick={() => result.url != null ? changeBeritaEndpoint(result.url) : console.log('nulled')} isDisabled={result.active == false ? true : false} colorScheme='messenger' key={index}>
                            <Text dangerouslySetInnerHTML={{__html: result.label}} />
                        </Button>
                    )
                }
            </Flex>
        </Container>
    );
};

export default News;