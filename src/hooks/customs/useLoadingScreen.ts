import { create } from 'zustand';
import UseLoadingScreen from '../interfaces/useLoadingScreen.interface';

const useLoadingScreen = create<UseLoadingScreen>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useLoadingScreen;