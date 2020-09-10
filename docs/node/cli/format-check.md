# format:check

Check for un-formatted files

## Usage

```bash
nx format:check
```

Install `nx` globally to invoke the command directly using `nx`, or use `npm run nx` or `yarn nx`.

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

### libs-and-apps

### only-failed

Default: `false`

Isolate projects which previously failed

### projects

Projects to format (comma delimited)

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
