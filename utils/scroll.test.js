import test from "node:test";
import assert from "node:assert/strict";
import { anchorIdOf, findActiveTarget, debounceScroll } from "./scroll.js";

test("anchorIdOf: extrae id sin '#'", () => {
  assert.equal(anchorIdOf("#inicio"), "inicio");
  assert.equal(anchorIdOf("#pmes"), "pmes");
});

test("anchorIdOf: null si no es ancla o está vacío", () => {
  assert.equal(anchorIdOf(null), null);
  assert.equal(anchorIdOf("inicio"), null);
  assert.equal(anchorIdOf("#"), null);
});

test("findActiveTarget: primera sección bajo el header", () => {
  const active = findActiveTarget({
    offsets: [
      { id: "inicio", top: -400 },
      { id: "pmes", top: 80 },
      { id: "empresas", top: 900 },
    ],
    headerHeight: 96,
  });
  assert.equal(active, "pmes");
});

test("findActiveTarget: retorna la última sección que cruzó la línea del header", () => {
  const active = findActiveTarget({
    offsets: [
      { id: "inicio", top: 50 },
      { id: "pmes", top: 200 },
    ],
    headerHeight: 96,
  });
  assert.equal(active, "inicio");
});

test("findActiveTarget: null si ninguna sección cruzó la línea", () => {
  const active = findActiveTarget({
    offsets: [
      { id: "inicio", top: 200 },
      { id: "pmes", top: 500 },
    ],
    headerHeight: 96,
  });
  assert.equal(active, null);
});

test("findActiveTarget: sin offsets retorna null", () => {
  assert.equal(findActiveTarget({ offsets: [] }), null);
  assert.equal(findActiveTarget({}), null);
});

test("findActiveTarget ignora offsets no finitos", () => {
  const active = findActiveTarget({
    offsets: [
      { id: "malo", top: NaN },
      { id: "inicio", top: 10 },
      { id: "pmes", top: 500 },
    ],
    headerHeight: 96,
  });
  assert.equal(active, "inicio");
});

test("debounceScroll: agrupa llamadas en ráfaga y ejecuta una vez", async () => {
  let calls = 0;
  const clock = { now: 1000 };
  const d = debounceScroll({
    wait: 100,
    now: () => clock.now,
    onScroll: () => calls++,
  });

  d.notify();
  d.notify();
  clock.now = 1030; // 30ms después
  d.notify();
  assert.equal(calls, 0);

  clock.now = 1150; // suficiente tiempo desde el último notify
  d.notify();
  assert.equal(calls, 1);
});

test("debounceScroll: flush ejecuta inmediatamente", () => {
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
