import { Rule, Tree, SchematicsException } from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';
import { JestProjectSchema } from '../schema';

export function checkForTestTarget(options: JestProjectSchema): Rule {
  return (tree: Tree): Tree => {
    const projectConfig = getProjectConfig(tree, options.project);
    if (projectConfig.architect.test) {
      throw new SchematicsException(
        `${options.project}: already has a test architect option.`
      );
    }
    return tree;
  };
}
