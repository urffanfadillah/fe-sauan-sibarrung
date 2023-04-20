interface LoadingScreenProps {
    size: 'sm' | 'full';
    isOpen: boolean;
    onClose: () => void;
    text?: string;
}
  
export default LoadingScreenProps;