# ngrx

Add an ngrx config to a project

## Usage

```bash
nx generate ngrx ...
```

By default, Nx will search for `ngrx` in the default collection provisioned in `workspace.json`.

You can specify the collection explicitly as follows:

```bash
nx g @nrwl/angular:ngrx ...
```

Show what will be generated without writing to disk:

```bash
nx g ngrx ... --dry-run
```

## Options

### barrels

Default: `false`

Type: `boolean`

Use barrels to re-export actions, state, and selectors.

### directory

Default: `+state`

Type: `string`

The name of the folder used to contain/group the generated NgRx files.

### facade

Default: `false`

Type: `boolean`

Create a Facade class for the the Feature.

### minimal

Default: `true`

Type: `boolean`

Only register the root state management setup or feature state.

### module

Type: `string`

The path to NgModule where the feature state will be registered. The host directory will create/use the new state directory.

### name

Type: `string`

Name of the NgRx feature state, such as "products" or "users"). Recommended to use the plural form of the name.

### onlyAddFiles

Default: `false`

Type: `boolean`

**Deprecated**, use `skipImport`. Only add new NgRx files, without changing the module file (e.g., --onlyAddFiles).

### onlyEmptyRoot

Default: `false`

Type: `boolean`

**Deprecated**, use `minimal`. Do not generate any files. Only generate StoreModule.forRoot and EffectsModule.forRoot (e.g., --onlyEmptyRoot).

### root

Default: `false`

Type: `boolean`

Setup root or feature state management with NgRx.

### skipFormat

Default: `false`

Type: `boolean`

Skip formatting of generated files.

### skipImport

Default: `false`

Type: `boolean`

Generate NgRx feature files without registering the feature in the NgModule.

### skipPackageJson

Default: `false`

Type: `boolean`

Do not update the package.json with NgRx dependencies.

### syntax

Default: `creators`

Type: `string`

Possible values: `classes`, `creators`

Specifies whether to use class-based or creator functions for actions, reducers, and effects.

### useDataPersistence

Default: `false`

Type: `boolean`

Generate NgRx Effects with the DataPersistence helper service. Set to false to use plain effects data persistence operators.
