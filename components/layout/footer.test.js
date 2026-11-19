import test from "node:test";
import assert from "node:assert/strict";
import {
  company,
  quickLinks,
  connections,
  footerBaseline,
  remoteLine,
  footerLinkClasses,
} from "./footer.js";

test("company: marca, razão social e CNPJ corretos", () => {
  assert.equal(company.brand, "Maniva Software");
  assert.equal(company.legalName, "MANIVA SOFTWARE E TECNOLOGIA LTDA");
  assert.equal(company.cnpj, "66.739.634/0001-79");
  assert.equal(company.whatsapp, "+55 15 93618-2755");
  assert.equal(company.email, "contato@manivasoftware.com.br");
});

test("quickLinks: navegação exceto Início", () => {
  assert.deepEqual(
    quickLinks().map((l) => l.id),
    ["solucoes", "helpmed", "metodo"],
  );
});

test("connections: HelpMed e LinkedIn externos", () => {
  assert.equal(connections[0].href, "https://helpmed.app");
  assert.ok(connections.every((c) => c.external));
});

test("footerBaseline: copyright + tagline", () => {
  assert.match(footerBaseline(2026), /© 2026 Maniva Software/);
  assert.match(footerBaseline(2026), /raízes sólidas para crescer com propósito/);
});

test("linha de atendimento remoto", () => {
  assert.equal(remoteLine, "Atendimento remoto em todo o Brasil.");
});

test("footerLinkClasses: transição suave de cor com reduced motion", () => {
  assert.ok(footerLinkClasses.includes("motion-safe:transition-colors"));
  assert.ok(footerLinkClasses.includes("motion-safe:duration-150"));
});
