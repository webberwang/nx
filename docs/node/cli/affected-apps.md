# affected:apps

Print applications affected by changes

## Usage

```bash
nx affected:apps
```

Install `nx` globally to invoke the command directly using `nx`, or use `npm run nx` or `yarn nx`.

### Examples

Print the names of all the apps affected by changing the index.ts file:

```bash
nx affected:apps --files=libs/mylib/src/index.ts
```

Print the names of all the apps affected by the changes between master and HEAD (e.g., PR):

```bash
nx affected:apps --base=master --head=HEAD
```

Print the names of all the apps affected by the last commit on master:

```bash
nx affected:apps --base=master~1 --head=master
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

### plain

Produces a plain output for affected:apps and affected:libs

### runner

This is the name of the tasks runner configured in nx.json

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
