# `@darkpatternsdigital/prettier-config`

Provides a standardized way to use the recommended Dark Patterns Digital
configuration for use with prettier.

Usage:

1. Install `@darkpatternsdigital/prettier-config` via your npm client.
2. Set your .prettierrc.json to the following contents:

	```json
	"@darkpatternsdigital/prettier-config"
	```

## Notes

- Turns on [`useTabs`][use-tabs]. This is because most editors support setting
  the tab width to the users preferences. We believe this is an accessibility
  improvement. An individual needing a large line height may choose a large tab
  size, or an individual needing a large font size can set the tab size smaller
  to keep it on the screen. Using spaces prevents those settings.

  You could consider overriding it if the tools required by the team do not
  allow tab display width configurations.

- Quotes are set to `singleQuote`. This is simply a preference that helps
  developers working with both C# and JS within the same project.

  This could be changed in the future.

- End of Line is set to `'lf'`. This is so that all formatting can agree with
  git checkouts on each system.

  We also recommend you include this line in your `.gitattributes` file.

  ```txt
  * text=auto eol=lf
  ```

[use-tabs]: https://prettier.io/docs/en/options.html#tabs