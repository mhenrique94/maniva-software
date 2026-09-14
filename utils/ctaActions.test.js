import test from "node:test";
import assert from "node:assert/strict";
import {
  openHeroCTA,
  openServicesSegment1CTA,
  openServicesSegment2CTA,
  openHelpMedShowcaseCTA,
} from "./ctaActions.js";
import { whatsappE164 } from "../components/layout/whatsapp.js";

const originalWindow = globalThis.window;
const originalGtag = globalThis.gtag;
const opened = [];

function setup(windowLike) {
  globalThis.window = windowLike;
  globalThis.gtag = () => {};
  opened.length = 0;
}

function teardown() {
  globalThis.window = originalWindow;
  globalThis.gtag = originalGtag;
}

const cases = [
  {
    name: "hero",
    fn: openHeroCTA,
    snippet: "qual solução faz sentido",
    segment: "all",
  },
  {
    name: "services_segment_1",
    fn: openServicesSegment1CTA,
    snippet: "site profissional simples",
    segment: "small_business",
  },
  {
    name: "services_segment_2",
    fn: openServicesSegment2CTA,
    snippet: "diagnóstico técnico",
    segment: "growing_business",
  },
  {
    name: "helpmed_showcase",
    fn: openHelpMedShowcaseCTA,
    snippet: "projeto tecnicamente desafiador",
    segment: "ambitious_projects",
  },
];

for (const { name, fn, snippet } of cases) {
  test(`${name}: faz tracking e abre WhatsApp com mensagem contextual`, () => {
    setup({
      open: (url, target) => {
        opened.push({ url, target });
      },
    });
    try {
      fn();
      assert.equal(opened.length, 1);
      assert.ok(opened[0].url.startsWith(`https://wa.me/${whatsappE164}`));
      assert.ok(opened[0].url.includes(encodeURIComponent(snippet)));
      assert.equal(opened[0].target, "_blank");
    } finally {
      teardown();
    }
  });
}

test("ações não quebram quando window.open não existe", () => {
  setup({});
  try {
    assert.doesNotThrow(() => openHeroCTA());
  } finally {
    teardown();
  }
});

test("ações não quebram em ambiente SSR (window undefined)", () => {
  setup(undefined);
  try {
    assert.doesNotThrow(() => openHeroCTA());
  } finally {
    teardown();
  }
});
