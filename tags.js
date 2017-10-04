'use strict';

function getTags(text) {
  const urglyTags = text.match(/#[\a-z]+/gi);
  return urglyTags
          .map(tag => tag.toLowerCase().replace('#',''))
          .filter(tag => tag.length >=3 && tag.length <= 120);
          
}

module.exports = {
  getTags: getTags
};
