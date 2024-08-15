import type { TSESLint } from '@typescript-eslint/utils';

export default {
	rules: {
		'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
	},
} as TSESLint.FlatConfig.Config;
