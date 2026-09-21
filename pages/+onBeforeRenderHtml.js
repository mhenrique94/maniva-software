import { collectStylesheetContents } from "../utils/inlineCss.mjs";

export const onBeforeRenderHtml = (pageContext) => {
  pageContext.stylesheetsInline = collectStylesheetContents(pageContext);
};
