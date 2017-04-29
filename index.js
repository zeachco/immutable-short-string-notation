import { Collection, Map } from 'immutable';

const forceParamToArray = (target, fn, argIndex = 0) => {
    const originalFn = '__' + fn;
    target.prototype[originalFn] = target.prototype[fn];
    target.prototype[fn] = function(...args) {
        if (typeof args[argIndex] === 'string') args[argIndex] = args[argIndex].split('.');
        return target.prototype[originalFn].apply(this, args);
    }
}

// This allows to use Immutable.Map.getIn('path.path2.path3')
forceParamToArray(Collection, 'getIn');
// This allows to use Immutable.Map.setIn('path.path2.path3')
forceParamToArray(Map, 'setIn');
