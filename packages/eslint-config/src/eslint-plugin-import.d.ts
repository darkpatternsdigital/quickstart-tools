declare module 'eslint-plugin-import' {
	import type { TSESLint } from '@typescript-eslint/utils';

	export const rules: TSESLint.FlatConfig.Plugin['rules'];
}
