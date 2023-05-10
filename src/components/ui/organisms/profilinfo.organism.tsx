import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface aboutInfoType {
    success: boolean;
    message: string;
    data: {
        content: string;
    };
}
  

const ProfilInfo: React.FC<aboutInfoType & { [key: string]: any }> = ({ success, message, data, ...restProps }) => {
    return (
        <Box
            maxW={{ base: 'full' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            backgroundColor={"#ffffff"}
            border={"1px solid #e7e7e7"}
            {...restProps}
            display={success ? 'block' : 'none'}
            >
            <Stack align={'center'} spacing={4}>
                <Box mt={2}>
                    <Heading size="md" textAlign={"center"}>{message}</Heading>
                    <Text mt={1} fontSize={'sm'} textAlign={"center"} dangerouslySetInnerHTML={{ __html: data.content as string }} />
                </Box>
            </Stack>
        </Box>
    )
};

export default ProfilInfo;