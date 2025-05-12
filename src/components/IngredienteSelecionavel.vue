<script setup lang="ts">
import Tag from './Tag.vue'
import { ref } from 'vue'

const props = defineProps<{
  ingrediente: string
}>()

const selecionavel = ref<boolean>(false)

const emit = defineEmits<{
  (e: 'adicionarIngrediente', ingrediente: string): void
  (e: 'removerIngrediente', ingrediente: string): void
}>()

function aoClicar() {
  selecionavel.value = !selecionavel.value
  if (selecionavel.value) {
    emit('adicionarIngrediente', props.ingrediente)
  } else emit('removerIngrediente', props.ingrediente)
}
</script>

<template>
  <button class="ingrediente" @click="aoClicar" :aria-pressed="selecionavel">
    <Tag :texto="props.ingrediente" :ativa="selecionavel" />
  </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>
