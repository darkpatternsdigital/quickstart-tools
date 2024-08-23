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

## Uninstall

To uninstall a NuGet package of templates, only the package name is needed:
```sh
# Uninstall
dotnet new uninstall DarkPatterns.Quickstart.Templates
```
