import test from "node:test";
import assert from "node:assert/strict";
import { pickActiveId, DEFAULT_HEADER_HEIGHT } from "./scrollSpyLogic.js";

const ids = ["inicio", "pmes", "empresas", "projetos", "metodo"];

test("pickActiveId: escolhe a última seção intersectada", () => {
  assert.equal(
    pickActiveId({
      ids,
      intersectingIds: ["inicio", "pmes"],
      previousId: null,
    }),
    "pmes",
  );
});

test("pickActiveId: todas intersectadas → última da ordem", () => {
  assert.equal(
    pickActiveId({ ids, intersectingIds: ids, previousId: "inicio" }),
    "metodo",
  );
});

test("pickActiveId: keep-last mantém a ativa anterior em gaps", () => {
  assert.equal(
    pickActiveId({ ids, intersectingIds: [], previousId: "empresas" }),
    "empresas",
  );
});

test("pickActiveId: sem anterior e sem interseção → null", () => {
  assert.equal(
    pickActiveId({ ids, intersectingIds: [], previousId: null }),
    null,
  );
});

test("pickActiveId: ignora interseção de id fora da lista", () => {
  assert.equal(
    pickActiveId({ ids, intersectingIds: ["desconhecido"], previousId: null }),
    null,
  );
});

test("DEFAULT_HEADER_HEIGHT: fallback de altura do header", () => {
  assert.equal(DEFAULT_HEADER_HEIGHT, 96);
});
