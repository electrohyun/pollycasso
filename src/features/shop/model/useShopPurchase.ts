import { useMemo, useState } from 'react';

import type { Product } from '@/entities/product';
import { useSound } from '@/entities/sound';
import { SOUND_ASSETS } from '@/shared/api/sound/assets';
import { SoundManager } from '@/shared/api/sound/manager';
import type { PurchaseStatus } from './types';

interface UseShopPurchaseProps {
  items: Product[];
  totalPrice: number;
  userBalance: number;
  userLevel: number;
}

export const useShopPurchase = ({
  items,
  totalPrice,
  userBalance,
  userLevel,
}: UseShopPurchaseProps) => {
  const { sfxVolume, isMuted } = useSound();
  const [status, setStatus] = useState<PurchaseStatus>('IDLE');

  const { maxItemLevel, missingCost, missingLevel } = useMemo(() => {
    const maxLevel = Math.max(...items.map((item) => item.level));
    return {
      maxItemLevel: maxLevel,
      missingCost: totalPrice - userBalance,
      missingLevel: maxLevel - userLevel,
    };
  }, [items, totalPrice, userBalance, userLevel]);

  const handlePurchase = () => {
    if (userLevel < maxItemLevel) {
      if (!isMuted)
        SoundManager.playSfx(SOUND_ASSETS.SFX.PURCHASE_FAILED, sfxVolume);
      setStatus('FAIL_LEVEL');
      return;
    }
    if (userBalance < totalPrice) {
      if (!isMuted)
        SoundManager.playSfx(SOUND_ASSETS.SFX.PURCHASE_FAILED, sfxVolume);
      setStatus('FAIL_BALANCE');
      return;
    }
    if (!isMuted) SoundManager.playSfx(SOUND_ASSETS.SFX.PURCHASE, sfxVolume);
    setStatus('SUCCESS');
  };

  return {
    status,
    handlePurchase,
    missingCost,
    missingLevel,
  };
};
