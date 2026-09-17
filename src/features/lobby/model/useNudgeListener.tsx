import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { overlay } from 'overlay-kit';

import { getWaitingSocket, SOUND_ASSETS, SoundManager } from '@/shared/api';
import { useSound } from '@/shared/lib';
import { NudgeModal } from '../ui/NudgeModal';

export const useNudgeListener = () => {
  const waitingSocket = getWaitingSocket();

  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const { sfxVolume, isMuted } = useSound();

  useEffect(() => {
    if (!waitingSocket) return;

    const handleNudge = () => {
      if (!isMuted)
        SoundManager.playSfx(SOUND_ASSETS.SFX.LOBBY_JOINED2, sfxVolume);
      overlay.open(({ unmount }) => {
        return (
          <NudgeModal
            close={() => unmount()}
            onConfirm={() => {
              if (roomId) {
                navigate(`/rooms/${roomId}`);
              }
            }}
          />
        );
      });
    };

    waitingSocket.on('room:nudged', handleNudge);

    return () => {
      waitingSocket.off('room:nudged', handleNudge);
    };
  }, [waitingSocket, roomId, navigate, isMuted, sfxVolume]);
};
