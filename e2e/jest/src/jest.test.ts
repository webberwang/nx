import { stripIndents } from '@angular-devkit/core/src/utils/literals';
import {
  ensureProject,
  forEachCli,
  runCLI,
  runCLIAsync,
  uniq,
  updateFile,
} from '@nrwl/e2e/utils';

forEachCli(() => {
  describe('Jest', () => {
    it('should be able test projects using jest', async (done) => {
      ensureProject();
      const mylib = uniq('mylib');
      const myapp = uniq('myapp');
      runCLI(`generate @nrwl/angular:app ${myapp} --unit-test-runner jest`);
      runCLI(
        `generate @nrwl/angular:lib ${mylib} --unit-test-runner jest --add-module-spec`
      );

      await Promise.all([
        runCLIAsync(`generate @nrwl/angular:service test --project ${myapp}`),
        runCLIAsync(`generate @nrwl/angular:component test --project ${myapp}`),
        runCLIAsync(`generate @nrwl/angular:service test --project ${mylib}`),
        runCLIAsync(`generate @nrwl/angular:component test --project ${mylib}`),
      ]);
      const appResult = await runCLIAsync(`test ${myapp} --no-watch`);
      expect(appResult.combinedOutput).toContain(
        'Test Suites: 3 passed, 3 total'
      );
      const libResult = await runCLIAsync(`test ${mylib}`);
      expect(libResult.combinedOutput).toContain(
        'Test Suites: 3 passed, 3 total'
      );
      done();
    }, 45000);

    it('should merge with jest config globals', async (done) => {
      ensureProject();
      const testGlobal = `'My Test Global'`;
      const mylib = uniq('mylib');
      runCLI(`generate @nrwl/workspace:lib ${mylib} --unit-test-runner jest`);

      updateFile(`libs/${mylib}/src/lib/${mylib}.ts`, `export class Test { }`);

      updateFile(
        `libs/${mylib}/src/lib/${mylib}.spec.ts`,
        `
          test('can access jest global', () => {
            expect((global as any).testGlobal).toBe(${testGlobal});
          });
        `
      );

      updateFile(
        `libs/${mylib}/jest.config.js`,
        stripIndents`
          module.exports = {
            testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
            transform: {
              '^.+\\.(ts|js|html)$': 'ts-jest'
            },
            resolver: '@nrwl/jest/plugins/resolver',
            moduleFileExtensions: ['ts', 'js', 'html'],
            coverageReporters: ['html'],
            passWithNoTests: true,
            globals: { testGlobal: ${testGlobal} }
          };`
      );

      const appResult = await runCLIAsync(`test ${mylib} --no-watch`);
      expect(appResult.combinedOutput).toContain(
        'Test Suites: 1 passed, 1 total'
      );
      done();
    }, 45000);

    it('should set the NODE_ENV to `test`', async (done) => {
      ensureProject();
      const mylib = uniq('mylib');
      runCLI(`generate @nrwl/workspace:lib ${mylib} --unit-test-runner jest`);

      updateFile(
        `libs/${mylib}/src/lib/${mylib}.spec.ts`,
        `
        test('can access jest global', () => {
          expect(process.env.NODE_ENV).toBe('test');
        });
        `
      );
      const appResult = await runCLIAsync(`test ${mylib} --no-watch`);
      expect(appResult.combinedOutput).toContain(
        'Test Suites: 1 passed, 1 total'
      );
      done();
    }, 45000);

    it('should support multiple `coverageReporters` through CLI', async (done) => {
      ensureProject();
      const mylib = uniq('mylib');
      runCLI(`generate @nrwl/workspace:lib ${mylib} --unit-test-runner jest`);

      updateFile(
        `libs/${mylib}/src/lib/${mylib}.spec.ts`,
        `
        test('can access jest global', () => {
          expect(true).toBe(true);
        });
        `
      );

      const result = await runCLIAsync(
        `test ${mylib} --no-watch --code-coverage --coverageReporters=text --coverageReporters=text-summary`
      );
      expect(result.stdout).toContain(
        'File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s'
      ); // text
      expect(result.stdout).toContain('Coverage summary'); // text-summary
      done();
    }, 45000);
  });
});
