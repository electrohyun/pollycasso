import { BellIcon } from '@heroicons/react/24/solid';

import { SOUND_ASSETS, SoundManager } from '@/shared/api';
import { useSound } from '@/shared/lib';

export const NotificationButton = () => {
  const { isMuted, sfxVolume } = useSound();

  const playClick = () => {
    if (!isMuted) {
      SoundManager.playSfx(SOUND_ASSETS.SFX.CLICK, sfxVolume);
    }
  };

  return (
    <button onClick={playClick} className="flex items-center mx-5">
      <BellIcon className="w-8 h-8 text-white cursor-pointer" />
    </button>
  );
};
