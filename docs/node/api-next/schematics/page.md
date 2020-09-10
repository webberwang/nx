# page

Create a Next.js page component

## Usage

```bash
nx generate page ...
```

By default, Nx will search for `page` in the default collection provisioned in `workspace.json`.

You can specify the collection explicitly as follows:

```bash
nx g @nrwl/next:page ...
```

Show what will be generated without writing to disk:

```bash
nx g page ... --dry-run
```

### Examples

Generate a component in the mylib library:

```bash
nx g component my-component --project=mylib
```

Generate a class component in the mylib library:

```bash
nx g component my-component --project=mylib --classComponent
```

## Options

### directory

Alias(es): d

Type: `string`

Create the page under this directory (can be nested). Will be created under 'pages/'.

### export

Alias(es): e

Default: `false`

Type: `boolean`

When true, the component is exported from the project index.ts (if it exists).

### flat

Default: `false`

Type: `boolean`

Create component at the source root rather than its own directory.

### js

Default: `false`

Type: `boolean`

Generate JavaScript files rather than TypeScript files.

### name

Type: `string`

The name of the component.

### project

Alias(es): p

Type: `string`

The name of the project.

### style

Alias(es): s

Default: `css`

Type: `string`

Possible values: `css`, `scss`, `styl`, `less`, `styled-components`, `@emotion/styled`, `styled-jsx`, `none`

The file extension to be used for style files.

### withTests

Default: `false`

Type: `boolean`

When true, creates a "spec.ts" test file for the new page.
