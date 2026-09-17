import { useState } from 'react';

import type { CategoryType } from '@/features/shop';
import { PRODUCT_CATEGORIES } from '@/shared/model';

export const useWardrobeFilter = () => {
  const [activeTab, setActiveTab] = useState<'ITEM' | 'SKILL'>('ITEM');

  const [itemCategory, setItemCategory] = useState<CategoryType>('TOP');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabChange = (tab: 'ITEM' | 'SKILL') => {
    setActiveTab(tab);
    if (tab === 'SKILL') {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    if (activeTab === 'SKILL') {
      setActiveTab('ITEM');
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleCategorySelect = (category: CategoryType) => {
    setItemCategory(category);
    setActiveTab('ITEM');
    setIsDropdownOpen(false);
  };

  const currentFilterLabel =
    activeTab === 'SKILL'
      ? PRODUCT_CATEGORIES.ITEM
      : PRODUCT_CATEGORIES[itemCategory];

  const itemButtonLabel =
    activeTab === 'ITEM' ? PRODUCT_CATEGORIES[itemCategory] : '아이템';

  return {
    activeTab,
    itemCategory,
    isDropdownOpen,
    currentFilterLabel,
    itemButtonLabel,
    handleTabChange,
    toggleDropdown,
    handleCategorySelect,
    setIsDropdownOpen,
  };
};
