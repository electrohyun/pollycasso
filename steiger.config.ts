import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      'fsd/ambiguous-slice-names': 'off',
      'fsd/forbidden-imports': 'error',
      'fsd/import-locality': 'error',
      'fsd/insignificant-slice': 'off',
      'fsd/segments-by-purpose': 'error',
    },
  },
]);
