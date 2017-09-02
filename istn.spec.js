const test = require('ava');
const Immutable = require('.');

test('getIn', t => {
    const state = Immutable
        .Map()
        .setIn(['aa', 'bb', 'cc'], 456);

    t.is(state.getIn('aa.bb.cc'), 456);
});

test('setIn', t => {
    const state = Immutable
        .Map()
        .setIn('aa.bb.cc', 123);

    t.is(state.getIn('aa.bb.cc'), 123);
});

test('mergeDeepIn', t => {
    const state = Immutable
        .Map()
        .mergeDeepIn('aa.bb.cc', {a: {b: {c: {d: 789}}}});

    t.is(state.getIn('aa.bb.cc.a.b.c.d'), 789);
});

test('updateIn', t => {
    const state = Immutable
        .Map()
        .setIn('aaa.bbb.ccc', Immutable.List())
        .updateIn('aaa.bbb.ccc', arr => arr.push(123));

        t.is(state.getIn('aaa.bbb.ccc').size, 1);
        t.is(state.getIn('aaa.bbb.ccc.0'), 123);
});

test('deleteIn', t => {
    const state = Immutable
        .Map()
        .setIn('aaa.bbb.ccc', 753)
        .deleteIn('aaa.bbb.ccc');

    t.is(state.getIn('aaa.bbb.ccc', 'not found'), 'not found');
});
