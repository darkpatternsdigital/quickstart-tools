import type { ConfigWithExtends } from 'typescript-eslint';

export const arrayTypeSettings = { default: 'array-simple' } as const;

export default {
	rules: {
		'@typescript-eslint/array-type': ['error', arrayTypeSettings],
	},
} as ConfigWithExtends;
