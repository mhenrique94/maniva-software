import test from "node:test";
import assert from "node:assert/strict";
import {
  company,
  quickLinks,
  connections,
  footerBaseline,
  lastUpdated,
  footerLinkClasses,
} from "./footer.js";

test("company: marca + razão social + CNPJ corretos (§5.8/CONTEXT)", () => {
  assert.equal(company.brand, "Maniva Software");
  assert.equal(company.legalName, "MANIVA SOFTWARE E TECNOLOGIA LTDA");
  assert.equal(company.cnpj, "66.739.634/0001-79");
  assert.equal(company.whatsapp, "+55 15 93618-2755");
  assert.equal(company.email, "contato@manivasoftware.com.br");
});

test("quickLinks: todos os links exceto 'Inicio'", () => {
  const links = quickLinks();
  assert.ok(!links.some((l) => l.id === "inicio"));
  assert.deepEqual(
    links.map((l) => l.id),
    ["pmes", "empresas", "projetos", "metodo"],
  );
});

test("connections: HelpMed + LinkedIn externos com âncora rica", () => {
  assert.deepEqual(
    connections.map((c) => c.href),
    ["https://helpmed.app", "https://www.linkedin.com/company/maniva-software"],
  );
  assert.ok(connections.every((c) => c.external));
  assert.ok(connections[0].description.includes("IA"));
});

test("footerBaseline: © ano + tagline rizomática", () => {
  const line = footerBaseline(2026);
  assert.ok(line.startsWith("© 2026"));
  assert.ok(line.includes("raízes sólidas"));
  assert.ok(line.includes("sem limites"));
});

test("lastUpdated: sinal de atualidade para GEO (§6.4)", () => {
  assert.match(lastUpdated, /^Atualizado em /);
  assert.ok(lastUpdated.includes("2026"));
});

test("footerLinkClasses: transição suave de cor com reduced motion", () => {
  assert.ok(footerLinkClasses.includes("motion-safe:transition-colors"));
  assert.ok(footerLinkClasses.includes("motion-safe:duration-150"));
  assert.ok(footerLinkClasses.includes("motion-safe:ease-in-out"));
});
