import * as Immutable from "https://esm.sh/immutable@4.3.1";

// Apply interceptor for these methods
[
  "getIn",
  "setIn",
  "mergeDeepIn",
  "updateIn",
  "deleteIn",
].forEach(function (method) {
  intercept(Immutable.Map.prototype, method);
});

function intercept<T extends Object>(
  original: T,
  method: keyof T,
) {
  type Method = typeof Immutable.Map.prototype[typeof method];

  const originalFn = original[method] as Method;
  function replacement(
    this: T,
    ...args: unknown[]
  ) {
    let [path, ...rest] = args;
    if (typeof path === "string") path = path.split(".");
    return originalFn.apply(this, [path, ...rest]);
  }
  Immutable.Map.prototype[method] = replacement;
}

export const Map = Immutable.Map;
export const List = Immutable.List;
export default Immutable;
