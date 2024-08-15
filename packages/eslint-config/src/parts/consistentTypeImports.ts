import type { TSESLint } from '@typescript-eslint/utils';

export default {
	rules: {
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				// allow `import('Foo').Foo` style type annotations
				disallowTypeAnnotations: false,
			},
		],
	},
} as TSESLint.FlatConfig.Config;
