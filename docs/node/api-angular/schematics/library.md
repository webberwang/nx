# library

Create an Angular library

## Usage

```bash
nx generate library ...
```

```bash
nx g lib ... # same
```

By default, Nx will search for `library` in the default collection provisioned in `workspace.json`.

You can specify the collection explicitly as follows:

```bash
nx g @nrwl/angular:library ...
```

Show what will be generated without writing to disk:

```bash
nx g library ... --dry-run
```

## Options

### addModuleSpec

Default: `false`

Type: `boolean`

Add a module spec file.

### buildable

Default: `false`

Type: `boolean`

Generate a buildable library.

### directory

Type: `string`

A directory where the lib is placed

### importPath

Type: `string`

The library name used to import it, like @myorg/my-awesome-lib. Must be a valid npm name.

### lazy

Default: `false`

Type: `boolean`

Add RouterModule.forChild when set to true, and a simple array of routes when set to false.

### linter

Default: `tslint`

Type: `string`

Possible values: `tslint`, `eslint`

The tool to use for running lint checks.

### name

Type: `string`

Library name

### parentModule

Type: `string`

Update the router configuration of the parent module using loadChildren or children, depending on what `lazy` is set to.

### prefix

Alias(es): p

Type: `string`

The prefix to apply to generated selectors.

### publishable

Default: `false`

Type: `boolean`

Generate a publishable library.

### routing

Default: `false`

Type: `boolean`

Add router configuration. See lazy for more information.

### simpleModuleName

Default: `false`

Type: `boolean`

Keep the module name simple (when using --directory)

### skipFormat

Default: `false`

Type: `boolean`

Skip formatting files

### skipPackageJson

Default: `false`

Type: `boolean`

Do not add dependencies to package.json.

### skipTsConfig

Default: `false`

Type: `boolean`

Do not update tsconfig.json for development experience.

### strict

Default: `false`

Type: `boolean`

Creates a library with stricter type checking and build optimization options.

### style

Default: `css`

Type: `string`

Possible values: `css`, `scss`, `styl`, `less`

The file extension to be used for style files.

### tags

Type: `string`

Add tags to the library (used for linting)

### unitTestRunner

Default: `jest`

Type: `string`

Possible values: `karma`, `jest`, `none`

Test runner to use for unit tests
