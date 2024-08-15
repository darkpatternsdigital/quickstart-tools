import { rules } from 'eslint-plugin-import';
import eslintPluginPackageJson from 'eslint-plugin-import/package.json' with { type: 'json' };
import type { ConfigWithExtends } from 'typescript-eslint';

/**
 * TODO: `eslint-plugin-import` does not yet support flat configs. There are
 * several PRS for this, including
 * https://github.com/import-js/eslint-plugin-import/pull/3018, but there are
 * still issues with many of these.
 *
 * The rules below are intended to match the import.recommended configuration...
 * minus the ones that are not working.
 */

export const eslintImportRecommended: ConfigWithExtends = {
	plugins: {
		import: {
			meta: {
				name: eslintPluginPackageJson.name,
				version: eslintPluginPackageJson.version,
			},
			rules,
		},
	},

	name: `import/recommended`,

	rules: {
		// analysis/correctness
		// 'import/no-unresolved': 'error',
		'import/named': 'error',
		// 'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',

		// red flags (thus, warnings)
		// 'import/no-named-as-default': 'warn',
		// 'import/no-named-as-default-member': 'warn',
		'import/no-duplicates': 'warn',
	},

	// need all these for parsing dependencies (even if _your_ code doesn't need
	// all of them)
	languageOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
};
