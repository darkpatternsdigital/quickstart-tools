import type { ConfigWithExtends } from 'typescript-eslint';

export const noRestrictedImportsPaths = [
	{
		name: 'react',
		importNames: ['default'],
		message: 'React import is not required',
	},
	{
		name: 'lodash',
		message:
			"Do not import entire lodash package; import 'lodash/<function>' instead.",
	},
] as const;

export default {
	rules: {
		'no-restricted-imports': [
			'error',
			{
				paths: noRestrictedImportsPaths,
			},
		],
	},
} as ConfigWithExtends;
