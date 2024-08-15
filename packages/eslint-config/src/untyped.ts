import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import { eslintImportRecommended } from './configs/import.js';
import arrayTypePart from './parts/arrayType.js';
import consistentTypeImports from './parts/consistentTypeImports.js';
import importOrderPart from './parts/importOrder.js';
import namingPart from './parts/naming.js';
import restrictImportsPart from './parts/restrictImports.js';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintImportRecommended,
	eslintConfigPrettier,
	arrayTypePart,
	consistentTypeImports,
	namingPart,
	importOrderPart,
	restrictImportsPart,
);
