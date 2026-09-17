import type { FC, ReactNode } from 'react';
import { useEffect, useMemo } from 'react';

import { SOUND_ASSETS, SoundManager } from '../../api';
import { SoundContext } from './soundContext';
import { useSoundStore } from './useSoundStore';

export const SoundProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    bgmVolume,
    sfxVolume,
    isMuted,
    setBgmVolume,
    setSfxVolume,
    toggleMute,
    unmute,
  } = useSoundStore();

  useEffect(() => {
    const handleFirstClick = () => {
      SoundManager.resume();
    };
    window.addEventListener('click', handleFirstClick, { once: true });
    return () => window.removeEventListener('click', handleFirstClick);
  }, []);

  useEffect(() => {
    if (isMuted) {
      // 뮤트 상태면 볼륨만 0으로 (정지시키면 다시 켤 때 처음부터 재생됨)
      SoundManager.setBgmVolume(0);
    } else {
      // 뮤트 해제 시점에만 playBgm 호출
      SoundManager.playBgm(SOUND_ASSETS.BGM.LOBBY, bgmVolume);
    }
  }, [isMuted, bgmVolume]);

  const value = useMemo(
    () => ({
      bgmVolume,
      sfxVolume,
      isMuted,
      setBgmVolume,
      setSfxVolume,
      toggleMute,
      unmute,
    }),
    [
      bgmVolume,
      sfxVolume,
      isMuted,
      setBgmVolume,
      setSfxVolume,
      toggleMute,
      unmute,
    ],
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
};
