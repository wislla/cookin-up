<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  texto: string
  ativa?: boolean
}>()
</script>

<template>
  <span :class="['tag', { ativa: ativa }]"> {{ texto }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background-color: var(--cinza-claro);
  font-weight: 400;
}
.tag.ativa {
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
}
</style>
