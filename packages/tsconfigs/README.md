# `@darkpatternsdigital/tsconfigs`

Provides a standard set of TypeScript configs commonly used with projects.

## Usage

All configs are intended for use with "composite" structures, with one
TypeScript project structure config for the full repository.

1. Install `@darkpatternsdigital/tsconfigs` via your npm client.
2. Set up your tsconfig with:

	- a reference to the corresponding config
	- `compilerOptions.outDir`
	- `compilerOptions.rootDir`
	- Any other settings you need, such as references.

	See an example below:

	```json
	{
		"extends": "@darkpatternsdigital/tsconfigs/configs/tsconfig.base.json",
		"compilerOptions": {
			"outDir": "./dist",
			"rootDir": "./src"
		}
	}
	```

## Configs

### [**`@darkpatternsdigital/tsconfigs/configs/tsconfig.base.json`**](./configs/tsconfig.base.json)

Intended to be a common baseline for most tsconfigs.

- Composite project structure
- Targets ESNext with a bundler
- `skipLibCheck` to improve performance
- `forceConsistentCasingInFileNames` to avoid deployment issues later
- Uses `strict` mode but disables some things normally checked by eslint.

### [**`@darkpatternsdigital/tsconfigs/configs/tsconfig.monorepo.json`**](./configs/tsconfig.monorepo.json)

Intended for the root project of a monorepo.

- Based on `@darkpatternsdigital/tsconfigs/configs/tsconfig.base.json`
- Disables build outputs

### [**`@darkpatternsdigital/tsconfigs/configs/tsconfig.node-cjs.json`**](./configs/tsconfig.node-cjs.json)

Intended for maximum legacy compatibility.

- Based on `@darkpatternsdigital/tsconfigs/configs/tsconfig.base.json`
- Switches to ES5-compatible output, commonjs, and node module resolution.
- Adds type reference to `@types/node`.

### [**`@darkpatternsdigital/tsconfigs/configs/tsconfig.node-esm.json`**](./configs/tsconfig.node-esm.json)

Intended for modern node work, such as libraries or server utilities.

- Based on `@darkpatternsdigital/tsconfigs/configs/tsconfig.base.json`
- Adds type reference to `@types/node`.

### [**`@darkpatternsdigital/tsconfigs/configs/tsconfig.node.json`**](./configs/tsconfig.node.json)

Alias for `@darkpatternsdigital/tsconfigs/configs/tsconfig.node-esm.json`.

### [**`@darkpatternsdigital/tsconfigs/configs/tsconfig.react.json`**](./configs/tsconfig.react.json)

A starting point for a React project as used with Vite.

- Based on `@darkpatternsdigital/tsconfigs/configs/tsconfig.base.json`
- Uses the React JSX runtime
- Enables libraries for browsers, including the DOM and web workers.
