import type { ConfigWithExtends } from 'typescript-eslint';

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
} as ConfigWithExtends;
