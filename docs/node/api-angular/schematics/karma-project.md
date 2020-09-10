# karma-project

Add karma testing to a project

## Usage

```bash
nx generate karma-project ...
```

By default, Nx will search for `karma-project` in the default collection provisioned in `workspace.json`.

You can specify the collection explicitly as follows:

```bash
nx g @nrwl/angular:karma-project ...
```

Show what will be generated without writing to disk:

```bash
nx g karma-project ... --dry-run
```

## Options

### project

Type: `string`

The name of the project.
