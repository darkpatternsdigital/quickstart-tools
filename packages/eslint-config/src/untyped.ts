import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
) as TSESLint.FlatConfig.ConfigArray;
