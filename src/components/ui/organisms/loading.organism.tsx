import { Container, Spinner, Text, VStack } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Container width={'100%'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <VStack>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                <Text>Loading...</Text>
            </VStack>
        </Container>
    )    
}