import { Collection, Map } from 'immutable';

const forceFirstParamToArray = (target, fn) => {
    const originalFn = '__' + fn;
    target.prototype[originalFn] = target.prototype[fn];
    target.prototype[fn] = function(...args) {
        if (typeof args[0] === 'string') args[0] = args[0].split('.');
        return target.prototype[originalFn].apply(this, args);
    }
}

// This allows to use Immutable.Map.getIn('path.path2.path3')
forceFirstParamToArray(Collection, 'getIn');
// This allows to use Immutable.Map.setIn('path.path2.path3')
forceFirstParamToArray(Map, 'setIn');
