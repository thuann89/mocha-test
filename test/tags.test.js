// const assert = require('assert');
const expect = require('expect');

const { getTags } = require('../tags');

const stringWithTags = 'Thuan is #cool and #handsome, he is absolutely a #Developer. Of course He is not a #ki';
const tags = getTags(stringWithTags);
const resultTags = ['cool','handsome', 'developer'];
describe('Tags', () => {
   it('should be an array with tags after # charactor', function() {
      expect(tags).toBeA('object');
      expect(tags[0]).toBe('cool');
      expect(tags[1]).toBe('handsome');
      expect(tags[2]).toBe('developer');
    });

    it('should be always lowercase', function() {
      expect(tags.includes('Developer')).toBe(false);
      expect(tags.includes('developer')).toBe(true);
    });

    it('should have all tags with length >=3 and <= 120', function() {
      expect(tags.includes('ki')).toBe(false);
      expect(tags.length).toBe(resultTags.length);
    });
})

