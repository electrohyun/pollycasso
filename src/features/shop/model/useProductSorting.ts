import { useMemo } from 'react';

import type { Product } from '@/entities/product';
import { SHOP_CATEGORIES } from '../constants/shop.constants';
import type { CategoryType, SortType } from '../model/types';

export const useProductSorting = (
  activeCategory: CategoryType,
  activeSort: SortType,
  products: Product[],
) => {
  return useMemo(() => {
    const targetCategoryLabel = SHOP_CATEGORIES[activeCategory];

    const filtered = products.filter(
      (item) => item.subCategory === targetCategoryLabel,
    );

    switch (activeSort) {
      case 'COST':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'LEVEL':
        return [...filtered].sort((a, b) => a.level - b.level);
      case 'POPULAR':
      default:
        return filtered;
    }
  }, [activeCategory, activeSort, products]);
};
