import { PRODUCT_CATEGORIES, SORT_OPTIONS } from './shopConfig';

export type SortType = keyof typeof SORT_OPTIONS;
export type CategoryType = keyof typeof PRODUCT_CATEGORIES;
export type PurchaseStatus = 'IDLE' | 'SUCCESS' | 'FAIL_BALANCE' | 'FAIL_LEVEL';
