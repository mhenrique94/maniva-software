import test from "node:test";
import assert from "node:assert/strict";
import {
  footerClose,
  helpMed,
  hero,
  method,
  rootMap,
  segments,
  statement,
} from "./content.js";

test("hero: proposta de valor curta e direta", () => {
  assert.ok(hero.title.length <= 45);
  assert.match(hero.lead, /HelpMed/);
  assert.equal(hero.primary, "Falar no WhatsApp");
  assert.equal(hero.secondary, "Ver soluções");
});

test("três segmentos por dor, cada um com CTA e audiência", () => {
  assert.equal(segments.length, 3);
  assert.deepEqual(
    segments.map((s) => s.id),
    ["pessoas", "empresas", "projetos"],
  );
  for (const s of segments) {
    assert.ok(s.cta);
    assert.ok(["segment1", "segment2", "segment3"].includes(s.ctaKey));
    assert.ok(
      ["small_business", "growing_business", "ambitious_projects"].includes(
        s.audience,
      ),
    );
    assert.match(s.message, /Maniva/);
    assert.equal(s.outcomes.length, 3);
    assert.ok(["leaf", "clay", "ink"].includes(s.accent));
  }
});

test("cada CTA de segmento aponta para a mensagem canônica", () => {
  assert.equal(
    segments[0].message,
    "Olá! Vi o site da Maniva e quero um site profissional simples e eficiente.",
  );
  assert.match(segments[1].message, /diagnóstico técnico/);
  assert.match(segments[2].message, /tecnicamente desafiador/);
});

test("rootMap deriva os links do diagrama", () => {
  assert.deepEqual(
    rootMap.map((r) => r.href),
    ["#pessoas", "#empresas", "#projetos"],
  );
  assert.deepEqual(
    rootMap.map((r) => r.number),
    ["01", "02", "03"],
  );
});

test("HelpMed: prova própria com três fatos", () => {
  assert.equal(helpMed.facts.length, 3);
  assert.match(helpMed.title, /produção/);
  assert.match(helpMed.lead, /PubMed/);
  assert.equal(helpMed.href, "https://helpmed.app");
});

test("statement: 12–40 palavras com a palavra de acento", () => {
  const words = statement.text.split(/\s+/).length;
  assert.ok(words >= 12);
  assert.ok(words <= 40);
  assert.equal(statement.accentWord, "raiz");
  assert.match(statement.text, /raiz/);
});

test("método: quatro passos e três diferenciais", () => {
  assert.equal(method.steps.length, 4);
  assert.deepEqual(
    method.steps.map((s) => s.title),
    ["Entendemos", "Projetamos", "Construímos", "Entregamos"],
  );
  assert.equal(method.differentiators.length, 3);
});

test("fechamento: CTA e linha de próximo passo", () => {
  assert.match(footerClose.title, /projeto/);
  assert.equal(footerClose.cta, "Falar no WhatsApp");
});

test("conteúdo sem palavras em espanhol", () => {
  const text = JSON.stringify({
    hero,
    segments,
    helpMed,
    statement,
    method,
    footerClose,
  });
  assert.ok(!text.match(/proyecto|con la|tu negocio/));
});
