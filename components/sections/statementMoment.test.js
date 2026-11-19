import test from "node:test";
import assert from "node:assert/strict";
import { highlightCount } from "./statementMoment.js";

test("antes do statement entrar na tela, nada destacado", () => {
  assert.equal(
    highlightCount({ top: 850, height: 300, viewportHeight: 1000, wordCount: 30 }),
    0,
  );
  assert.equal(
    highlightCount({ top: 1200, height: 300, viewportHeight: 1000, wordCount: 30 }),
    0,
  );
});

test("statement passou da tela: tudo destacado", () => {
  assert.equal(
    highlightCount({ top: -300, height: 300, viewportHeight: 1000, wordCount: 30 }),
    30,
  );
});

test("progresso monotônico entre 0 e wordCount", () => {
  const first = highlightCount({
    top: 450,
    height: 300,
    viewportHeight: 1000,
    wordCount: 30,
  });
  const second = highlightCount({
    top: 200,
    height: 300,
    viewportHeight: 1000,
    wordCount: 30,
  });
  assert.ok(first > 0);
  assert.ok(second >= 15);
  assert.ok(second >= first);
  assert.ok(second <= 30);
});

test("parâmetros from/to controlam a janela", () => {
  const early = highlightCount({
    top: 700,
    height: 300,
    viewportHeight: 1000,
    wordCount: 10,
    from: 0.9,
    to: 0.5,
  });
  const late = highlightCount({
    top: 700,
    height: 300,
    viewportHeight: 1000,
    wordCount: 10,
    from: 0.5,
    to: 0.1,
  });
  assert.ok(early > late);
});
