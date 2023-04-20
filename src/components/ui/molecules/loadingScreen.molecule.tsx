import { Box, Center, Modal, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import LoadingScreenProps from '../../../hooks/interfaces/loadingScreenProps.interface';

export default function LoadingScreen({ size, text, ...props }: LoadingScreenProps) {
  return (
    <Modal closeOnOverlayClick={false} {...props} isCentered>
      <ModalOverlay />
      <ModalContent userSelect="none" boxSize="full" maxW={size} maxH={size}>
        <Center boxSize="full">
          <Box>            
            <Text align="center" mt="1.5rem">
              {text || 'Loading...'}
            </Text>
          </Box>
        </Center>
      </ModalContent>
    </Modal>
  );
}