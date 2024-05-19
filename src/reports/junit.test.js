import assert from 'assert/strict';
import { join } from 'path';
import { getReports } from './junit.js';

describe('reports/junit', () => {
  describe('#getReports()', () => {
    it('should return tests report', async () => {
      const reports = await getReports(join(process.cwd(), 'test/data/junit'));
      assert.equal(reports.length, 1);
      assert.deepEqual(reports, [
        { type: 'tests', data: { passed: 8, failed: 4, tests: 12 } }
      ]);
    });
  });
});
