# Step 3: Share Code

Awesome! The application is working as expected!

Next, let's work on refactoring a bit. What we're planning to do is move the `Todo` type to it's own library. This is important if we want to share the type between multiple applications, without having to duplicate the same type everywhere.

**Run the following generator to create a library:**

```bash
nx g @nrwl/workspace:lib data
```

The result should look like this:

```treeview
myorg/
├── apps/
│   └── todos/
├── libs/
│   └── data/
│       ├── src/
│       │   ├── lib/
│       │   │   └── data.ts
│       │   └── index.ts
│       ├── jest.config.js
│       ├── tsconfig.lib.json
│       ├── tsconfig.json
│       └── tsconfig.spec.json
├── tools/
├── nx.json
├── package.json
└── tsconfig.base.json
```

**Copy the type into `libs/data/src/lib/data.ts`.**

```typescript
export type Todo = {
  message: string;
  done: boolean;
};
```

### A note about VS Code :

If you're using [VS Code](https://code.visualstudio.com/) it may be necessary at this point to restart the TS server so that the new `@myorg/data` package is recognised. This needs to be done **every time a new workspace library is added**.

Use the command pallette with a `*.ts` file open and choose `Restart TS Server`.

## Refactor the Todos Service

**Now update `apps/todos/src/app/todos/todos.service.ts` to import the type:**

```typescript
import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg/data';

const todos: Todo[] = [
  { message: 'Take out trash', done: false },
  { message: 'Continue using Nx', done: false },
];

@Injectable()
export class TodosService {
  getTodos(): Todo[] {
    return todos;
  }
}
```

Every time you add a new library, you have to restart `nx serve`. **So restart `nx serve todos` and you should see the application running.**

!!!!!
Nx allows you to share code...
!!!!!
Between Nx applications and libraries
Between Nx applications
Between Nx libraries
