
## Local testing of templates

`dotnet new` templates can be installed either via packages or folders. To
install or uninstall a single template, use the folder path:

```sh
# Install
dotnet new install <folder>
# example
dotnet new install template/content/vitereact

# Uninstall
dotnet new uninstall <folder>
# example
dotnet new uninstall template/content/vitereact
```

This repository packages templates as a nuget package automatically when built.
NuGet packages are cached locally per version, so each time you build, you need
to specify a unique version to be able to install it. For instance:

```sh
dotnet build -p:Version=0.0.1-local.1
# OR
dotnet build -p:VersionSuffix=local.1

# The full file path is output as the last line of the build
dotnet new install artifacts/package/debug/DarkPatterns.Quickstart.Templates.0.1.0-local.1.nupkg
```

You can also add the `VersionSuffix` property via `/Directory.Build.local.props` as follows:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<Project>
	<PropertyGroup>
		<VersionSuffix>local.16</VersionSuffix>
	</PropertyGroup>
</Project>
```

To uninstall a NuGet package of templates, only the package name is needed:
```sh
# Uninstall
dotnet new uninstall DarkPatterns.Quickstart.Templates
```
