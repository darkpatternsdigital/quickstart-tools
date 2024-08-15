import type { TSESLint } from '@typescript-eslint/utils';

export default {
	rules: {
		// Adds naming conventions - see https://typescript-eslint.io/rules/naming-convention#allowed-selectors-modifiers-and-types
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				// React requires PascalCase for components, which can
				// be functions, variables, parameters, etc.
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'forbid',
			},
			{
				selector: ['memberLike', 'variableLike'],
				format: ['camelCase'],
				leadingUnderscore: 'forbid',
			},
			{
				selector: ['typeLike', 'enumMember'],
				format: ['PascalCase'],
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['T'],
			},
			{
				// This effectively disables the rule for object literal properties and imports, which we do not always control
				selector: ['objectLiteralMethod', 'objectLiteralProperty', 'import'],
				format: null,
			},
			{
				// effectively disallows enums
				// TODO: use a custom rule for a better error message and possibly auto-fix
				selector: ['enum'],
				prefix: ['prefer-type-aliases'],
				format: ['PascalCase'],
			},
		],
	},
} as TSESLint.FlatConfig.Config;
