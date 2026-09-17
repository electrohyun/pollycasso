import { useMemo } from 'react';

import type { Product } from '@/entities/product';
import type { CategoryType, SortType } from '../model/types';
import { PRODUCT_CATEGORIES } from './shopConfig';

export const useProductSorting = (
  activeCategory: CategoryType,
  activeSort: SortType,
  products: Product[],
) => {
  return useMemo(() => {
    const targetCategoryLabel = PRODUCT_CATEGORIES[activeCategory];

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
