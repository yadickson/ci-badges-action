import assert from 'assert/strict';
import { join } from 'path';
import { getReports } from './cobertura.js';

describe('reports/cobertura', () => {
  describe('#getReports()', () => {
    it('should return coverage report', async () => {
      const reports = await getReports(join(process.cwd(), 'test/data/cobertura'));
      assert.equal(reports.length, 1);
      assert.deepEqual(reports, [
        { type: 'coverage', data: { coverage: 92.09999999999999 } }
      ]);
    });
  });
});
