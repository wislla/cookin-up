<script setup lang="ts">
import { obterCategorias } from '@/http/index'
import type ICategoria from '@/Interfaces/ICategoria'
import { onMounted, ref } from 'vue'
import CardCategoria from './CardCategoria.vue'
import BotaoPrincipal from './BotaoPrincipal.vue'

defineOptions({
  name: 'SelecionarIngredientes',
})

const categorias = ref<ICategoria[]>([])
onMounted(async () => {
  categorias.value = await obterCategorias()
})

const emit = defineEmits<{
  (e: 'adicionarIngrediente', ingrediente: string): void
  (e: 'removerIngrediente', ingrediente: string): void
  (e: 'buscarReceitas'): void
}>()
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
    <p class="paragrafo-lg instrucpes">Instru</p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria
          :categoria="categoria"
          @adicionar-ingrediente="emit('adicionarIngrediente', $event)"
          @remover-ingrediente="emit('removerIngrediente', $event)"
        />
      </li>
    </ul>
    <p class="paragrafo dica">Atenção: consideramos que você tem em casa sal, pimenta e água.</p>
    <BotaoPrincipal texto="Buscar receitas!" @click="emit('buscarReceitas')" />
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
