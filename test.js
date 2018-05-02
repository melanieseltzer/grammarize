import * as assert from 'assert';
import grammarize from './index';

describe('Test samples', () => {
  it('should return null if amount is not a number', () => {
    assert.equal(grammarize('fail', '', ''), null);
  });
  it('should return null if singular is not a string', () => {
    assert.equal(grammarize(5, 554, ''), null);
  });
  it('should return null if plural is not a string', () => {
    assert.equal(grammarize(1, '', 4545), null);
  });
  it('should use plural if amount is greater than 1', () => {
    assert.equal(grammarize(1000, 'notification', 'notifications'), 'notifications');
  });
  it('should use singular if amount equals 1', () => {
    assert.equal(grammarize(1, 'is', 'are'), 'is');
  });
  it('should work if the amount is a decimal number', () => {
    assert.equal(grammarize(8.5, 'letter', 'letters'), 'letters');
  });
});
