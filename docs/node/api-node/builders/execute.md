# execute

Execute a Node application

Builder properties can be configured in workspace.json when defining the builder, or when invoking it.
Read more about how to use builders and the CLI here: https://nx.dev/node/guides/cli.

## Properties

### args

Type: `array`

Extra args when starting the app

### buildTarget

Type: `string`

The target to run to build you the app

### host

Default: `localhost`

Type: `string`

The host to inspect the process on

### inspect

Default: `inspect`

Type: `string | boolean`

Ensures the app is starting with debugging

### port

Default: `0`

Type: `number`

The port to inspect the process on. Setting port to 0 will assign random free ports to all forked processes.

### runtimeArgs

Type: `array`

Extra args passed to the node process

### waitUntilTargets

Type: `array`

The targets to run to before starting the node app

### watch

Default: `true`

Type: `boolean`

Run build when files change
