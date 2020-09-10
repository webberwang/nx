# Step 1: Create Application

In this tutorial you will use Nx to build a server application out of common libraries using modern technologies.

## Create a New Workspace

**Start by creating a new workspace.**

```shell script
yarn create nx-workspace

? Workspace name (e.g., org name)         myorg
? What to create in the new workspace     nest
? Application name                        todos
```

```treeview
myorg/
├── README.md
├── apps/
│   └── todos/
│       ├── jest.config.js
│       ├── src/
│       │   ├── app/
│       │   │   ├── app.controller.spec.ts
│       │   │   ├── app.controller.ts
│       │   │   ├── app.module.ts
│       │   │   ├── app.service.spec.ts
│       │   │   └── app.service.ts
│       │   ├── assets/
│       │   ├── environments/
│       │   │   ├── environment.prod.ts
│       │   │   └── environment.ts
│       │   └── main.ts
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       └── tsconfig.spec.json
├── tools/
│   ├── schematics
│   └── tsconfig.tools.json
├── jest.config.js
├── libs
├── nx.json
├── package.json
├── tsconfig.base.json
└── workspace.json
```

The generate command added one project to our workspace:

- A Nest application

## Note on the Nx CLI

Depending on how your dev env is set up, the command above might result in `Command 'nx' not found`.

To fix it, you can either install the `nx` cli globally by running:

```shell script
npm install -g nx
```

or

```shell script
yarn global add nx
```

Or you can prepend every command with `npm run`:

```bash
npm run nx -- serve todos
```

or

```bash
yarn nx serve todos
```

## Workspace.json, Targets, Builders

You configure your workspaces in `workspace.json`. This file contains the workspace projects with their architect targets. For instance, `todos` has the `build`, `serve`, `lint`, and `test` targets. This means that you can run `nx build todos`, `nx serve todos`, etc..

Every target uses a builder which actually runs this target. So targets are analogous to typed npm scripts, and builders are analogous to typed shell scripts.

**Why not use shell scripts and npm scripts directly?**

There are a lot of advantages to providing additional metadata to the build tool. For instance, you can introspect targets. `nx serve todos --help` results in:

```shell script
nx run todos:serve [options,...]

Options:
  --buildTarget           The target to run to build you the app
  --waitUntilTargets      The targets to run to before starting the node app (default: )
  --host                  The host to inspect the process on (default: localhost)
  --port                  The port to inspect the process on. Setting port to 0 will assign random free ports to all forked processes.
  --watch                 Run build when files change (default: true)
  --inspect               Ensures the app is starting with debugging (default: inspect)
  --runtimeArgs           Extra args passed to the node process (default: )
  --args                  Extra args when starting the app (default: )
  --help                  Show available options for project target.
```

It helps with good editor integration (see [VSCode Support](https://nx.dev/node/cli/console)).

But, most importantly, it provides a holistic dev experience regardless of the tools used, and enables advanced build features like distributed computation caching and distributed builds).

## Serve the newly created application

Now that the application is set up, run it locally via:

```shell script
nx serve todos
```

!!!!!
Open http://localhost:3333/api in the browser. What do you see?
!!!!!
Page saying "{"message":"Welcome to todos!"}"
Page saying "This is Nest app built with Nx!"
404
