# Dark Patterns Digital starter templates

Install the templates:

```sh
dotnet new install DarkPatterns.Quickstart.Templates
```

List the templates:

```sh
dotnet new list dpd-
```

## Templates

### `dpd-openapi`

Creates an `api.yaml` with a basic `/env` endpoint.

### `dpd-sln`

Provides a new .NET SLN and `pnpm` workspace set up with Dark Patterns Digital
quickstart defaults.

Includes:
- eslint configuration
- pnpm configuration
- tsconfig
- prettier
- gitattributes
- .NET solution file

Does not include:
- gitignore
- any projects

## `dpd-pnpmlib`

Creates a new .NET project that builds a TypeScript NPM package with the Dark
Patterns Digital PNPM build structure.

Includes:
- .NET project file
- TypeScript configuration
- Exports from package.json

Does not include:
- Updating other tsconfig.json files to include proper references
- Support for path aliases

## `dpd-pnpmapi`

Creates a new .NET project that builds a TypeScript NPM package with the Dark
Patterns Digital PNPM build structure, complete with a build step to generate
an OpenAPI client via the Dark Patterns Digital OpenAPI code generators.

Includes:
- .NET project file
	- "Generation" task to generate from the API file
- TypeScript configuration
- Exports from package.json to allow access to generated models

Does not include:
- Updating other tsconfig.json files to include proper references
- Support for path aliases
- Operations

## Uninstall

To uninstall a NuGet package of templates, only the package name is needed:
```sh
# Uninstall
dotnet new uninstall DarkPatterns.Quickstart.Templates
```
