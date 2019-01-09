import Immutable from './lib/main';

test('getIn', () => {
    const state = Immutable
        .Map()
        .setIn(['aa', 'bb', 'cc'], 456);

    expect(state.getIn('aa.bb.cc')).toBe(456);
});

test('setIn', () => {
    const state = Immutable
        .Map()
        .setIn('aa.bb.cc', 123);

    expect(state.getIn('aa.bb.cc')).toBe(123);
});

test('mergeDeepIn', () => {
    const state = Immutable
        .Map()
        .mergeDeepIn('aa.bb.cc', {a: {b: {c: {d: 789}}}});

    expect(state.getIn('aa.bb.cc.a.b.c.d')).toBe(789);
});

test('updateIn', () => {
    const state = Immutable
        .Map()
        .setIn('aaa.bbb.ccc', Immutable.List())
        .updateIn('aaa.bbb.ccc', arr => arr.push(123));

        expect(state.getIn('aaa.bbb.ccc').size).toBe(1);
        expect(state.getIn('aaa.bbb.ccc.0')).toBe(123);
});

test('deleteIn', () => {
    const state = Immutable
        .Map()
        .setIn('aaa.bbb.ccc', 753)
        .deleteIn('aaa.bbb.ccc');

    expect(state.getIn('aaa.bbb.ccc', 'not found')).toBe('not found');
});
