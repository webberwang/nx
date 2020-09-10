# affected:dep-graph

Graph dependencies affected by changes

## Usage

```bash
nx affected:dep-graph
```

Install `nx` globally to invoke the command directly using `nx`, or use `npm run nx` or `yarn nx`.

### Examples

Open the dep graph of the workspace in the browser, and highlight the projects affected by changing the index.ts file:

```bash
nx affected:dep-graph --files=libs/mylib/src/index.ts
```

Open the dep graph of the workspace in the browser, and highlight the projects affected by the changes between master and HEAD (e.g., PR):

```bash
nx affected:dep-graph --base=master --head=HEAD
```

Save the dep graph of the workspace in a json file, and highlight the projects affected by the changes between master and HEAD (e.g., PR):

```bash
nx affected:dep-graph --base=master --head=HEAD --file=output.json
```

Generate a static website with dep graph data in an html file, highlighting the projects affected by the changes between master and HEAD (e.g., PR):

```bash
nx affected:dep-graph --base=master --head=HEAD --file=output.html
```

Open the dep graph of the workspace in the browser, and highlight the projects affected by the last commit on master:

```bash
nx affected:dep-graph --base=master~1 --head=master
```

Open the dep graph of the workspace in the browser, highlight the projects affected, but exclude project-one and project-two:

```bash
nx affected:dep-graph --exclude=project-one,project-two
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

### file

output file (e.g. --file=output.json or --file=dep-graph.html)

### files

Change the way Nx is calculating the affected command by providing directly changed files, list of files delimited by commas

### focus

Use to show the dependency graph for a particular project and every node that is either an ancestor or a descendant.

### groupByFolder

Group projects by folder in dependency graph

### head

Latest commit of the current branch (usually HEAD)

### help

Show help

### host

Bind the dep graph server to a specific ip address.

### only-failed

Default: `false`

Isolate projects which previously failed

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
