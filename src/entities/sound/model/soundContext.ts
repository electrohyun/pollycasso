import { createContext, useContext } from 'react';

export interface SoundContextValue {
  bgmVolume: number;
  sfxVolume: number;
  isMuted: boolean;
  setBgmVolume: (volume: number) => void;
  setSfxVolume: (volume: number) => void;
  toggleMute: () => void;
  unmute: () => void;
}

export const SoundContext = createContext<SoundContextValue | undefined>(
  undefined,
);

export const useSound = () => {
  const context = useContext(SoundContext);

  if (!context) {
    throw new Error('useSound must be used within SoundProvider');
  }

  return context;
};
