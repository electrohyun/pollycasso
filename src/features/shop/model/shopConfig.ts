import { PRODUCT_CATEGORIES } from '@/shared/model';

export { PRODUCT_CATEGORIES } from '@/shared/model';

export const SORT_OPTIONS = {
  POPULAR: '인기순',
  LEVEL: '레벨순',
  COST: '코인순',
} as const;

export const SORT_OPTIONS_LIST = [
  { key: 'POPULAR', label: '인기순' },
  { key: 'LEVEL', label: '레벨순' },
  { key: 'COST', label: '코인순' },
] as const;

export const SHOP_CATEGORY_LIST = [
  { key: 'ITEM', label: '기술' },
  { key: 'BIRD', label: '새' },
  { key: 'TOP', label: '상의' },
  { key: 'BOTTOM', label: '하의' },
  { key: 'HAT', label: '모자' },
  { key: 'SHOES', label: '신발' },
  { key: 'ACC', label: '액세서리' },
  { key: 'EFFECT', label: '효과' },
] as const;

export const CATEGORY_TO_OUTFIT_KEY: Record<string, string> = {
  [PRODUCT_CATEGORIES.BIRD]: 'bird',
  [PRODUCT_CATEGORIES.TOP]: 'top',
  [PRODUCT_CATEGORIES.BOTTOM]: 'bottom',
  [PRODUCT_CATEGORIES.HAT]: 'hat',
  [PRODUCT_CATEGORIES.SHOES]: 'shoes',
  [PRODUCT_CATEGORIES.ACC]: 'accessory',
  [PRODUCT_CATEGORIES.EFFECT]: 'effect',
};
