# print-affected

Graph execution plan

## Usage

```bash
nx print-affected
```

Install `nx` globally to invoke the command directly using `nx`, or use `npm run nx` or `yarn nx`.

### Examples

Print information about affected projects and the dependency graph.:

```bash
nx print-affected
```

Print information about the projects affected by the changes between master and HEAD (e.g,. PR).:

```bash
nx print-affected --base=master --head=HEAD
```

Prints information about the affected projects and a list of tasks to test them.:

```bash
nx print-affected --target=test
```

Prints information about the affected projects and a list of tasks to build them and their dependencies.:

```bash
nx print-affected --target=build --with-deps
```

Prints the projects property from the print-affected output.:

```bash
nx print-affected --target=build --select=projects
```

Prints the tasks.target.project property from the print-affected output.:

```bash
nx print-affected --target=build --select=tasks.target.project
```

## Options

### all

All projects

### base

Base of the current branch (usually master)

### configuration

This is the configuration to use when performing tasks on projects

### exclude

Default: ``

Exclude certain projects from being processed

### files

Change the way Nx is calculating the affected command by providing directly changed files, list of files delimited by commas

### head

Latest commit of the current branch (usually HEAD)

### help

Show help

### only-failed

Default: `false`

Isolate projects which previously failed

### runner

This is the name of the tasks runner configured in nx.json

### select

### skip-nx-cache

Default: `false`

Rerun the tasks even when the results are available in the cache

### uncommitted

Uncommitted changes

### untracked

Untracked changes

### verbose

Print additional error stack trace on failure

### version

Show version number
