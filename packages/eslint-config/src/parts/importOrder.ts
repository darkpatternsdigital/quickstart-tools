import type { ConfigWithExtends } from 'typescript-eslint';

export default {
	rules: {
		'import/order': [
			'error',
			{
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
			},
		],
	},
} as ConfigWithExtends;
