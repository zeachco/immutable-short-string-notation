var Immutable = require('immutable');

function forceParamToArray(target, fn, argIndex) {
    argIndex = argIndex || 0;
    var originalFn = '__' + fn;
    target.prototype[originalFn] = target.prototype[fn];
    target.prototype[fn] = function() {
        if (typeof arguments[argIndex] === 'string') arguments[argIndex] = arguments[argIndex].split('.');
        return target.prototype[originalFn].apply(this, arguments);
    }
}

// Apply interceptor for these methods
[
    'getIn',
    'setIn',
    'mergeDeepIn',
    'updateIn',
    'deleteIn'
].forEach(function(method) {
    forceParamToArray(Immutable.Map, method);
});

module.exports = Immutable;
