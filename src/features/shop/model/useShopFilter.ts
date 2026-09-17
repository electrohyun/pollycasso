import { useState } from 'react';

import { SOUND_ASSETS, SoundManager } from '@/shared/api';
import { useSound } from '@/shared/lib';
import { SORT_OPTIONS } from './shopConfig';
import type { CategoryType, SortType } from './types';

export const useShopFilter = () => {
  const { sfxVolume, isMuted } = useSound();

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeSort, setActiveSort] = useState<SortType>('POPULAR');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('TOP');

  const toggleSortOpen = () => {
    if (!isMuted) SoundManager.playSfx(SOUND_ASSETS.SFX.CLICK, sfxVolume);
    setIsSortOpen((prev) => !prev);
  };

  const handleSortChange = (optionKey: SortType) => {
    if (!isMuted) SoundManager.playSfx(SOUND_ASSETS.SFX.CLICK, sfxVolume);
    setActiveSort(optionKey);
    setIsSortOpen(false);
  };

  const handleCategoryChange = (category: CategoryType) => {
    if (!isMuted) SoundManager.playSfx(SOUND_ASSETS.SFX.CLICK, sfxVolume);
    setActiveCategory(category);
  };

  const activeSortLabel = SORT_OPTIONS[activeSort];

  return {
    isSortOpen,
    activeSort,
    activeSortLabel,
    activeCategory,
    toggleSortOpen,
    handleSortChange,
    handleCategoryChange,
  };
};
