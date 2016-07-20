/**
 * Deep Object and Array Cloning(extending)
 */

module.exports = (child, parent) => {
    var i,
        toStr = Object.prototype.toString,
        astr = '[object Array]',
        hasOwn = Object.prototype.hasOwnProperty;

    child = child || {};
    for (i in parent) {
        if (hasOwn.call(parent, i)) {
            if (typeof parent[i] === 'object') {
                child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                extend(child[i], parent[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }

    return child;
};