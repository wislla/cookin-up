<script setup lang="ts">
import { obterReceitas } from '@/http'
import type IReceita from '@/Interfaces/IReceita'
import { onMounted, ref } from 'vue'
import BotaoPrincipal from './BotaoPrincipal.vue'
import CardReceita from './CardReceita.vue'
import { itensLista1estaoemLista2 } from '@/operacoes/lista'

const receitasEncontradas = ref<IReceita[]>([])

onMounted(async () => {
  const receitas = await obterReceitas()
  receitasEncontradas.value = receitas.filter((receita) => {
    const possoFaserReceita = itensLista1estaoemLista2(receita.ingredientes, props.ingredientes)
    return possoFaserReceita
  })
})

const props = defineProps<{
  ingredientes: string[]
}>()

const emit = defineEmits<{
  (e: 'editarReceitas'): void
}>()
</script>

<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>

    <p class="paragrafo-lg resultados-encontrados">
      Resultados encontrados: {{ receitasEncontradas.length }}
    </p>

    <div v-if="receitasEncontradas.length" class="receitas-wrapper">
      <p class="paragrafo-lg informacoes">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
      </p>

      <ul class="receitas">
        <li v-for="receita of receitasEncontradas" :key="receita.nome">
          <CardReceita :receita="receita" />
        </li>
      </ul>
    </div>

    <div v-else class="receitas-nao-encontradas">
      <p class="paragrafo-lg receitas-nao-encontradas__info">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
      </p>

      <img
        src="../assets/imagens/sem-receitas.png"
        alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste."
      />
    </div>

    <BotaoPrincipal texto="Editar lista" @click="emit('editarReceitas')" />
  </section>
</template>

<style scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 1.5rem;
}

.resultados-encontrados {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 0.5rem;
}

.receitas-wrapper {
  margin-bottom: 3.5rem;
}

.informacoes {
  margin-bottom: 2rem;
}

.receitas {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receitas-nao-encontradas {
  margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
