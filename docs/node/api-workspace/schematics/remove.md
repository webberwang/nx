# remove

Remove an application or library

## Usage

```bash
nx generate remove ...
```

```bash
nx g rm ... # same
```

By default, Nx will search for `remove` in the default collection provisioned in `workspace.json`.

You can specify the collection explicitly as follows:

```bash
nx g @nrwl/workspace:remove ...
```

Show what will be generated without writing to disk:

```bash
nx g remove ... --dry-run
```

### Examples

Remove my-feature-lib from the workspace:

```bash
nx g @nrwl/workspace:remove my-feature-lib
```

Force removal of my-feature-lib from the workspace:

```bash
nx g @nrwl/workspace:remove my-feature-lib --forceRemove
```

## Options

### forceRemove

Alias(es): force-remove

Default: `false`

Type: `boolean`

When true, forces removal even if the project is still in use.

### projectName

Alias(es): project

Type: `string`

The name of the project to remove

### skipFormat

Alias(es): skip-format

Default: `false`

Type: `boolean`

Skip formatting files.
