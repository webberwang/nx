# build

Build Storybook

Builder properties can be configured in workspace.json when defining the builder, or when invoking it.
Read more about how to use builders and the CLI here: https://nx.dev/node/guides/cli.

## Properties

### docsMode

Default: `false`

Type: `boolean`

Build a documentation-only site using addon-docs.

### outputPath

Type: `string`

The output path of the generated files.

### quiet

Default: `true`

Type: `boolean`

Suppress verbose build output.

### uiFramework (**hidden**)

Default: `@storybook/angular`

Type: `string`

Storybook framework npm package
