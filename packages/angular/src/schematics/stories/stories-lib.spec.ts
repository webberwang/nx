import { Tree, externalSchematic } from '@angular-devkit/schematics';
import { StorybookStoriesSchema } from './stories';
import {
  runSchematic,
  runExternalSchematic,
  callRule,
} from '../../utils/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';

describe('angular:stories for libraries', () => {
  describe('Stories for empty Angular library', () => {
    let appTree: Tree;
    beforeEach(async () => {
      appTree = await createEmptyUILib('test-empty-ui-lib');
    });

    it('should not fail on empty NgModule declarations.', () => {
      expect(
        async () =>
          await runSchematic<StorybookStoriesSchema>(
            'stories',
            { name: 'test-empty-ui-lib', generateCypressSpecs: false },
            appTree
          )
      ).not.toThrowError();
    });
  });

  describe('Stories for non-empty Angular library', () => {
    let appTree: Tree;

    beforeEach(async () => {
      appTree = await createTestUILib('test-ui-lib');
    });

    describe('Storybook stories', () => {
      it('should generate stories.ts files', async () => {
        const tree = await runSchematic<StorybookStoriesSchema>(
          'stories',
          { name: 'test-ui-lib', generateCypressSpecs: false },
          appTree
        );

        expect(
          tree.exists(
            'libs/test-ui-lib/src/lib/test-button/test-button.component.stories.ts'
          )
        ).toBeTruthy();
        expect(
          tree.exists(
            'libs/test-ui-lib/src/lib/test-other/test-other.component.stories.ts'
          )
        ).toBeTruthy();
        expect(
          tree.exists(
            'libs/test-ui-lib/src/lib/nested/nested-button/nested-button.component.stories.ts'
          )
        ).toBeTruthy();
        const propLines = [
          `buttonType: text('buttonType', 'button'),`,
          `style: text('style', 'default'),`,
          `age: number('age', ''),`,
          `isOn: boolean('isOn', false),    `,
        ];
        const storyContent = tree.readContent(
          'libs/test-ui-lib/src/lib/test-button/test-button.component.stories.ts'
        );
        propLines.forEach((propLine) => {
          storyContent.includes(propLine);
        });
      });

      it('should generate cypress spec files', async () => {
        let tree = await runExternalSchematic(
          '@nrwl/storybook',
          'cypress-project',
          { name: 'test-ui-lib' },
          appTree
        );
        tree = await runSchematic<StorybookStoriesSchema>(
          'stories',
          { name: 'test-ui-lib', generateCypressSpecs: true },
          tree
        );

        expect(
          tree.exists(
            'libs/test-ui-lib/src/lib/test-button/test-button.component.stories.ts'
          )
        ).toBeTruthy();
        expect(
          tree.exists(
            'libs/test-ui-lib/src/lib/test-other/test-other.component.stories.ts'
          )
        ).toBeTruthy();
        const propLines = [
          `buttonType: text('buttonType', 'button'),`,
          `style: text('style', 'default'),`,
          `age: number('age', ''),`,
          `isOn: boolean('isOn', false),    `,
        ];
        const storyContent = tree.readContent(
          'libs/test-ui-lib/src/lib/test-button/test-button.component.stories.ts'
        );
        propLines.forEach((propLine) => {
          storyContent.includes(propLine);
        });

        expect(
          tree.exists(
            'apps/test-ui-lib-e2e/src/integration/test-button/test-button.component.spec.ts'
          )
        ).toBeTruthy();
        expect(
          tree.exists(
            'apps/test-ui-lib-e2e/src/integration/test-other/test-other.component.spec.ts'
          )
        ).toBeTruthy();
      });

      it('should run twice without errors', async () => {
        let tree = await runExternalSchematic(
          '@nrwl/storybook',
          'cypress-project',
          { name: 'test-ui-lib' },
          appTree
        );
        tree = await runSchematic<StorybookStoriesSchema>(
          'stories',
          { name: 'test-ui-lib', generateCypressSpecs: false },
          tree
        );
        tree = await runSchematic<StorybookStoriesSchema>(
          'stories',
          { name: 'test-ui-lib', generateCypressSpecs: true },
          tree
        );
      });
    });
  });
});

export async function createTestUILib(libName: string): Promise<Tree> {
  let appTree = Tree.empty();
  appTree = createEmptyWorkspace(appTree);
  appTree = await callRule(
    externalSchematic('@nrwl/angular', 'library', {
      name: libName,
    }),
    appTree
  );
  appTree = await callRule(
    externalSchematic('@schematics/angular', 'component', {
      name: 'test-button',
      project: libName,
    }),
    appTree
  );
  const modulePath = `libs/${libName}/src/lib/${libName}.module.ts`;
  appTree.overwrite(
    modulePath,
    `import * as ButtonExports from './test-button/test-button.component';
    ${appTree.read(modulePath)}`
  );
  appTree = await callRule(
    externalSchematic('@schematics/angular', 'module', {
      name: 'nested',
      project: libName,
      path: `libs/${libName}/src/lib`,
    }),
    appTree
  );
  appTree = await callRule(
    externalSchematic('@schematics/angular', 'component', {
      name: 'nested-button',
      project: libName,
      module: 'nested',
      path: `libs/${libName}/src/lib/nested`,
    }),
    appTree
  );
  appTree.overwrite(
    `libs/${libName}/src/lib/test-button/test-button.component.ts`,
    `
import { Component, OnInit, Input } from '@angular/core';

export type ButtonStyle = 'default' | 'primary' | 'accent';

@Component({
  selector: 'proj-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent implements OnInit {
  @Input('buttonType') type = 'button';
  @Input() style: ButtonStyle = 'default';
  @Input() age: number;
  @Input() isOn = false;

  constructor() { }

  ngOnInit() {
  }

}
`
  );
  appTree.overwrite(
    `libs/${libName}/src/lib/test-button/test-button.component.html`,
    `<button [attr.type]="type" [ngClass]="style"></button>`
  );
  appTree = await callRule(
    externalSchematic('@schematics/angular', 'component', {
      name: 'test-other',
      project: libName,
    }),
    appTree
  );
  return appTree;
}

export async function createEmptyUILib(libName: string): Promise<Tree> {
  let appTree = Tree.empty();
  appTree = createEmptyWorkspace(appTree);
  appTree = await callRule(
    externalSchematic('@nrwl/angular', 'library', {
      name: libName,
    }),
    appTree
  );
  return appTree;
}
