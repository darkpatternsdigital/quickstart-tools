import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { rules } from 'eslint-plugin-import';
import type { ConfigWithExtends } from 'typescript-eslint';

const eslintPluginPackageJson = JSON.parse(
	(
		await readFile(
			fileURLToPath(import.meta.resolve('eslint-plugin-import/package.json')),
		)
	).toString(),
) as typeof import('eslint-plugin-import/package.json');

/**
 * TODO: `eslint-plugin-import` does not yet support flat configs. There are
 * several PRS for this, including
 * https://github.com/import-js/eslint-plugin-import/pull/3018, but there are
 * still issues with many of these.
 *
 * The only rule we use is `import/order`, which does not suffer the issues.
 *
 * typescript-eslint has some information about what eslint-plugin-import rules
 * should be used at https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
 */

export const eslintImportPluginOnly: ConfigWithExtends = {
	plugins: {
		import: {
			meta: {
				name: eslintPluginPackageJson.name,
				version: eslintPluginPackageJson.version,
			},
			rules,
		},
	},
};
