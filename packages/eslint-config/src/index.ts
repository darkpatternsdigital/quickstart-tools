import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import untyped from './untyped.js';

export default tseslint.config(
	...untyped,
	...tseslint.configs.recommendedTypeChecked,
	eslintConfigPrettier,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
);
