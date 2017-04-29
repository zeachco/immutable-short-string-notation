# immutable-short-string-notation
Allows you to set paths directly in strings instead of passing arrays

## How to use
`
// place this at the root of your project
require('immutable-short-string-notation');

// somewhere else in the application you may use the string syntax
ImmutableState.setIn('a.b.c.d.e', 42); // <- this is the short version made possible by immutable-short-string-notation
ImmutableState.setIn('a.b.c.d.e'.split('.'), 42);
ImmutableState.setIn(['a', 'b', 'c', 'd', 'e'], 42);
`
All other ways still work

## Why ?

because writing `state.getIn(['node1', 'node23', 'node67'])` could be shorter
and `state.getIn('node1.node23.node67'.split('.'))` feel wrong when it's been repeaded a tousand times

so let's just remove the split as anyway we are sure we want to pass an array here