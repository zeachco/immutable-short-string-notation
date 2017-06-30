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

// This allows to use Immutable.Map.getIn('path.path2.path3')
forceParamToArray(Immutable.Collection, 'getIn');
// This allows to use Immutable.Map.setIn('path.path2.path3', ...)
forceParamToArray(Immutable.Map, 'setIn');
// This allows to use Immutable.Map.mergeDeepIn('path.path2.path3', {...})
forceParamToArray(Immutable.Map, 'mergeDeepIn');

module.exports = Immutable;
