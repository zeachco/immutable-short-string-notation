import * as Immutable from 'immutable';

function forceParamToArray(target:Function, fn:string, argIndex?:number) {
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
].forEach((method:string) => {
    forceParamToArray(Immutable.Map, method);
    forceParamToArray(Immutable.List, method);
});

export {Immutable}
export default Immutable;
