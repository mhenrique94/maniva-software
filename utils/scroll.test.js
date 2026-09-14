import test from "node:test";
import assert from "node:assert/strict";
import { anchorIdOf, debounceScroll } from "./scroll.js";

test("anchorIdOf: extrae id sem '#'", () => {
  assert.equal(anchorIdOf("#inicio"), "inicio");
  assert.equal(anchorIdOf("#pmes"), "pmes");
});

test("anchorIdOf: null se não é âncora ou está vazio", () => {
  assert.equal(anchorIdOf(null), null);
  assert.equal(anchorIdOf("inicio"), null);
  assert.equal(anchorIdOf("#"), null);
});

test("anchorIdOf: retorna null em href não string", () => {
  assert.equal(anchorIdOf(undefined), null);
});

test("debounceScroll: agrupa chamadas em rajada e executa uma vez", async () => {
  let calls = 0;
  const clock = { now: 1000 };
  const d = debounceScroll({
    wait: 100,
    now: () => clock.now,
    onScroll: () => calls++,
  });

  d.notify();
  d.notify();
  clock.now = 1030; // 30ms depois
  d.notify();
  assert.equal(calls, 0);

  clock.now = 1150; // tempo suficiente desde o último notify
  d.notify();
  assert.equal(calls, 1);
});

test("debounceScroll: flush executa imediatamente", () => {
  let calls = 0;
  const d = debounceScroll({
    wait: 1000,
    now: () => 0,
    onScroll: () => calls++,
  });
  d.notify();
  d.flush();
  assert.equal(calls, 1);
});
