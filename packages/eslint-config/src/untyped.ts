import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import { eslintImportRecommended } from './configs/import.js';
import importOrderPart from './parts/importOrder.js';
import namingPart from './parts/naming.js';
import restrictImportsPart from './parts/restrictImports.js';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintImportRecommended,
	eslintConfigPrettier,
	{
		rules: {
			'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					// allow `import('Foo').Foo` style type annotations
					disallowTypeAnnotations: false,
				},
			],
		},
	},
	namingPart,
	importOrderPart,
	restrictImportsPart,
);
