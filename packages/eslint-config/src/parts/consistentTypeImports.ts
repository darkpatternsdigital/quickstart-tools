import type { ConfigWithExtends } from 'typescript-eslint';

export const consistentTypeImportsSettings = {
	// allow `import('Foo').Foo` style type annotations
	disallowTypeAnnotations: false,
} as const;

export default {
	rules: {
		'@typescript-eslint/consistent-type-imports': [
			'error',
			consistentTypeImportsSettings,
		],
	},
} as ConfigWithExtends;
