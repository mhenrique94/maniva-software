<template>
  <Section variant="vitality" organic :aria-label="'HelpMed Showcase'">
    <div class="container mx-auto px-6 py-20">
      <div class="text-center max-w-4xl mx-auto mb-16">
        <Typography variant="display-md" class="mb-6">
          Projetos que outros chamariam de impossíveis — <br class="hidden lg:block" />
          <span class="text-root-600">nosso terreno favorito</span>
        </Typography>
        <Typography variant="text-lg" class="text-slate-600">
          Quando falamos em IA complexa, nós realmente construímos.
        </Typography>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <!-- HelpMed Showcase Card -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-root-500 to-leaf-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-root-100">
            <div class="p-8 md:p-12">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-root-100 rounded-lg flex items-center justify-center text-root-600">
                  <Icon name="brain" size="28" />
                </div>
                <Typography variant="text-xl" class="font-bold">HelpMed.app</Typography>
              </div>
              
              <Typography variant="text-lg" class="font-semibold mb-4">
                Plataforma de IA aplicada a um domínio específico
              </Typography>
              
              <p class="text-slate-600 mb-8 leading-relaxed">
                Como construímos uma plataforma de IA que processa milhares de artigos médicos para pesquisadores, transformando dados complexos em síntese útil.
              </p>

              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-600">
                    <Icon name="check" size="14" />
                  </div>
                  <Typography variant="text-sm" class="text-slate-700">Processamento de documentos complexos</Typography>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-600">
                    <Icon name="check" size="14" />
                  </div>
                  <Typography variant="text-sm" class="text-slate-700">Sistema de busca inteligente (Context-Aware)</Typography>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-600">
                    <Icon name="check" size="14" />
                  </div>
                  <Typography variant="text-sm text-slate-700">Escalabilidade e alta performance de processamento</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Showcase Text -->
        <div class="space-y-8">
          <Typography variant="text-2xl" class="font-bold text-slate-800 leading-snug">
            IA, processamento de dados e sistemas especializados.
          </Typography>
          
          <Typography variant="text-md" class="text-slate-600">
            Não nos limitamos ao básico. Atuamos na fronteira entre a necessidade de negócio e a capacidade técnica, resolvendo desafios de arquitetura, extração de conhecimento e automação inteligente.
          </Typography>

          <div class="pt-4">
            <Button variant="primary" size="lg" @click="handleCTAShowcase">
              Tenho um projeto desafiador
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { Button, Section, Typography, Icon } from '@ui';
import { trackCTA } from '@util/ctaTracking';

const handleCTAShowcase = () => {
  trackCTA('helpmed_showcase_cta', 'ambitious_projects');
  const msg = encodeURIComponent("Olá! Vi o site da Maniva e tenho um projeto tecnicamente desafiador para conversar.");
  window.open(`https://wa.me/5515936182755?text=${msg}`, '_blank');
};
</script>
