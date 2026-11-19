import test from "node:test";
import assert from "node:assert/strict";
import {
  getHelpMedSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from "./structuredData.ts";

test("Organization", () => {
  const org = getOrganizationSchema();
  assert.equal(org["@type"], "Organization");
  assert.equal(org.name, "Maniva Software");
  assert.equal(org.legalName, "MANIVA SOFTWARE E TECNOLOGIA LTDA");
  assert.equal(org.taxId, "66.739.634/0001-79");
  assert.equal(org.areaServed, "BR");
  assert.equal(org.url, "https://manivasoftware.com.br");
  assert.ok(org.description.length > 40);
  assert.ok(org.sameAs.includes("https://www.linkedin.com/company/maniva-software"));
});

test("HelpMed", () => {
  const help = getHelpMedSchema();
  assert.equal(help["@type"], "SoftwareApplication");
  assert.equal(help.name, "HelpMed");
  assert.equal(help.author.name, "Maniva Software");
  assert.equal(help.publisher.name, "Maniva Software");
  assert.equal(help.url, "https://helpmed.app");
});

test("WebSite", () => {
  const site = getWebSiteSchema();
  assert.equal(site["@type"], "WebSite");
  assert.equal(site.name, "Maniva Software");
  assert.equal(site.url, "https://manivasoftware.com.br");
  assert.equal(site.inLanguage, "pt-BR");
});
