<script setup lang="ts">
import type ICategoria from '@/Interfaces/ICategoria'
import IngredienteSelecionavel from './IngredienteSelecionavel.vue'

defineProps<{
  categoria: ICategoria
}>()

const emit = defineEmits<{
  (e: 'adicionarIngrediente', ingrediente: string): void
  (e: 'removerIngrediente', ingrediente: string): void
}>()
</script>

<template>
  <article class="categoria">
    <header class="categoria__cabecalho">
      <img
        :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`"
        :alt="`Imagem de ${categoria.nome}`"
        class="categoria__imagem"
      />
      <h2 class="categoria__nome">{{ categoria.nome }}</h2>
    </header>

    <ul class="categoria__ingredientes">
      <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
        <IngredienteSelecionavel
          :ingrediente="ingrediente"
          @adicionar-ingrediente="emit('adicionarIngrediente', $event)"
          @remover-ingrediente="emit('removerIngrediente', $event)"
        />
      </li>
    </ul>
  </article>
</template>

<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #fff);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3d6d4a);
  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
