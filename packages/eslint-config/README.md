# `@darkpatternsdigital/eslint-config`

Provides a standard set of configs for eslint projects.

## Usage

1. Install `@darkpatternsdigital/eslint-config` along with `eslint` and
   `@eslint/compat` via your npm client.
2. Create a `./eslint.config.mjs` with the following contents:

	```js
	import { fileURLToPath } from 'node:url';
	import { includeIgnoreFile } from '@eslint/compat';
	import dpeslint from '@darkpatternsdigital/eslint-config';
	import { tseslint } from '@darkpatternsdigital/eslint-config/types';

	export default tseslint.config(
		includeIgnoreFile(fileURLToPath(import.meta.resolve('./.gitignore'))),
		...dpeslint,
	);
	```

## Exports

### `@darkpatternsdigital/eslint-config`

- `default` contains the typical rules for a typescript project, including type checking.

### `@darkpatternsdigital/eslint-config/tsx`

- `default` contains the typical rules for a typscript project, including type checking, but allows JSX-style naming conventions in JSX or TSX files.

### `@darkpatternsdigital/eslint-config/types`

- `tseslint` - re-exports the default export of `typescript-eslint` for convenience.

### `@darkpatternsdigital/eslint-config/untyped`

- `default` contains the typical rules for a project that does not support type checking.

### `@darkpatternsdigital/eslint-config/jsx`

- `default` contains the typical rules for a project that does not support type checking, but allows JSX-style naming conventions in JSX or TSX files.