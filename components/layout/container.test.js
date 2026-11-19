import test from "node:test";
import assert from "node:assert/strict";
import { containerClasses } from "./container.js";

test("container é a única classe (o resto vive no CSS do SFC)", () => {
  assert.deepEqual(containerClasses().classes, ["maniva-container"]);
});
