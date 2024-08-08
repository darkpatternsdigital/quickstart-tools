import tseslint from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";
import eslintConfigPrettier from "eslint-config-prettier";
import untyped from "./untyped";

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
) as TSESLint.FlatConfig.ConfigArray;
