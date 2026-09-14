/**
 * Helper para tracking de eventos de CTA
 * Implementado para facilitar a segmentação de interesse por segmento de audiência.
 */

export const trackCTA = (ctaName, segment, metadata = {}) => {
  // Aqui seria integrada a lógica de envio para o GA4
  // Por enquanto, apenas logamos para desenvolvimento
  console.log(`[CTA Tracking] Name: ${ctaName}, Segment: ${segment}`, metadata);

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      cta_name: ctaName,
      audience_segment: segment,
      ...metadata,
    });
  }
};
