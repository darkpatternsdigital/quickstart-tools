import tseslint from 'typescript-eslint';
import { namingConventions } from './parts/naming.js';

export default tseslint.config({
	files: ['**/*.tsx', '**/*.jsx'],
	rules: {
		// Adds naming conventions - see https://typescript-eslint.io/rules/naming-convention#allowed-selectors-modifiers-and-types
		'@typescript-eslint/naming-convention': [
			'error',
			...namingConventions.filter(
				(entry) =>
					entry.selector[0] !== 'memberLike' ||
					entry.selector[1] !== 'variableLike',
			),
		],
	},
});
