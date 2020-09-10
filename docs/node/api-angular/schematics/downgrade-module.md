# downgrade-module

Setup Downgrade Module

## Usage

```bash
nx generate downgrade-module ...
```

By default, Nx will search for `downgrade-module` in the default collection provisioned in `workspace.json`.

You can specify the collection explicitly as follows:

```bash
nx g @nrwl/angular:downgrade-module ...
```

Show what will be generated without writing to disk:

```bash
nx g downgrade-module ... --dry-run
```

## Options

### angularJsImport

Type: `string`

Import expression of the AngularJS application (e.g., --angularJsImport=some_node_module/my_app).

### name

Type: `string`

The name of the main AngularJS module.

### project

Type: `string`

The name of the project

### skipFormat

Default: `false`

Type: `boolean`

Skip formatting files

### skipPackageJson

Default: `false`

Type: `boolean`

Do not add @angular/upgrade to package.json (e.g., --skipPackageJson)
