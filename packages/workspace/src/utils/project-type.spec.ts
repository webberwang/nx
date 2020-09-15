import { projectRootDir, ProjectType } from './project-type';

describe('ProjectType', () => {
  it('should return project root dir', () => {
    const libRootDir = projectRootDir(ProjectType.Library);
    const appRootDir = projectRootDir(ProjectType.Library);

    expect(libRootDir).toBe('libs');
    expect(appRootDir).toBe('apps');
  });

  // it('should return project root path', () => {});
});
