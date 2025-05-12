<script setup lang="ts">
import Tag from './Tag.vue'

defineProps<{
  ingredientes: string[]
}>()
</script>

<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto"> Sua lista: </span>
    <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
      <li v-for="(ingrediente, index) in ingredientes" :key="index">
        <Tag :texto="ingrediente" ativa />
      </li>
    </ul>
    <p v-else class="lista-vazia">
      <img src="../assets/images/icones/lista-vazia.svg" alt="Emoji triste" />
      <span> Sua lista está vazia! </span>
    </p>
  </section>
</template>

<style scoped>
.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}
</style>
