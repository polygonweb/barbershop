var fs = require('fs'),
    path = require('path');

/**
 * Return array with directory list
 */
function dirList(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}


module.exports = dirList;