import type { ConfigWithExtends } from 'typescript-eslint';

export default {
	rules: {
		'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
	},
} as ConfigWithExtends;
