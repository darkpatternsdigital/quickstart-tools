import tseslint from 'typescript-eslint';

export default tseslint.config(...tseslint.configs.recommendedTypeCheckedOnly, {
	languageOptions: {
		parserOptions: {
			projectService: true,
			tsconfigRootDir: process.cwd(),
		},
	},
});
