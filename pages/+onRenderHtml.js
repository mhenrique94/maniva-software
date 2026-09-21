import { onRenderHtml as vikeVueOnRenderHtml } from "vike-vue/__internal/integration/onRenderHtml";

export const onRenderHtml = async (pageContext) => {
  const result = await vikeVueOnRenderHtml(pageContext);
  result.injectFilter = (assets) => {
    for (const asset of assets) {
      if (asset.assetType === "style") asset.inject = false;
    }
  };
  return result;
};
