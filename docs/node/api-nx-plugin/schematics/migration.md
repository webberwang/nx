# migration

Create a migration for an Nx Plugin

## Usage

```bash
nx generate migration ...
```

By default, Nx will search for `migration` in the default collection provisioned in `workspace.json`.

You can specify the collection explicitly as follows:

```bash
nx g @nrwl/nx-plugin:migration ...
```

Show what will be generated without writing to disk:

```bash
nx g migration ... --dry-run
```

### Examples

Generate libs/my-plugin/src/migrations/my-migration:

```bash
nx g migration my-migration --project=my-plugin --version=1.0.0
```

## Options

### description

Alias(es): d

Type: `string`

Migration description

### name

Type: `string`

Migration name

### packageJsonUpdates

Alias(es): p

Default: `false`

Type: `boolean`

Whether or not to include package.json updates

### project

Alias(es): p

Type: `string`

The name of the project.

### unitTestRunner

Default: `jest`

Type: `string`

Possible values: `jest`, `none`

Test runner to use for unit tests

### version

Alias(es): v

Type: `string`

Version to use for the migration
