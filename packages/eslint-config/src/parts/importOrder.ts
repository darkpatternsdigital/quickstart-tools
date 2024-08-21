import type { ConfigWithExtends } from 'typescript-eslint';

export const importOrderSettings = {
	pathGroupsExcludedImportTypes: [],
	'newlines-between': 'never',
	warnOnUnassignedImports: true,
	alphabetize: {
		order: 'asc',
		caseInsensitive: true,
	},
	groups: [
		'builtin',
		'external',
		'internal',
		'parent',
		'sibling',
		'index',
		'object',
		'unknown',
	],
	pathGroups: [
		{
			pattern: '@darkpatternsdigital/**',
			group: 'external',
			position: 'after',
		},
		{
			pattern: '@/**',
			group: 'internal',
			position: 'before',
		},
	],
} as const;

export default {
	rules: {
		'import/order': ['error', importOrderSettings],
	},
} as ConfigWithExtends;
