import { BellIcon } from '@heroicons/react/24/solid';

import { useSound } from '@/entities/sound';
import { SOUND_ASSETS } from '@/shared/api/sound/assets';
import { SoundManager } from '@/shared/api/sound/manager';

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
