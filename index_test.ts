import { assert } from "https://deno.land/std@0.195.0/assert/assert.ts";

import { List, Map } from "./index.ts";
// import { List, Map } from "https://esm.sh/immutable@4.3.1";

Deno.test("test with original object functions", () => {
  const state = Map()
    .setIn(["aa", "bb", "cc"], 123);

  assert(state.getIn(["aa", "bb", "cc"]) === 123);
});

Deno.test("getIn", () => {
  const state = Map()
    .setIn(["aa", "bb", "cc"], 123);

  assert(state.getIn("aa.bb.cc") === 123);
});

Deno.test("setIn", () => {
  const state = Map()
    .setIn("aa.bb.cc", 123);
  assert(state.getIn(["aa", "bb", "cc"]) === 123);
});

Deno.test("mergeDeepIn", () => {
  const state = Map()
    .mergeDeepIn("aa.bb.cc", { a: { b: { c: { d: 789 } } } });

  assert(state.getIn("aa.bb.cc.a.b.c.d") === 789);
});

Deno.test("updateIn", () => {
  const state = Map()
    .setIn("aaa.bbb.ccc", List())
    .updateIn(
      "aaa.bbb.ccc",
      (arr: any) => arr.push(123),
    );

  assert((state.getIn("aaa.bbb.ccc") as any).size === 1);
  assert(state.getIn("aaa.bbb.ccc.0") === 123);
});

Deno.test("deleteIn", () => {
  const state = Map()
    .setIn("aaa.bbb.ccc", 753)
    .deleteIn("aaa.bbb.ccc");

  assert(state.getIn("aaa.bbb.ccc", "not found") === "not found");
});
