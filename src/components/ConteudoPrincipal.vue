<script setup lang="ts">
import { ref } from 'vue'
import SelecionarIngredientes from './SelecionarIngredientes.vue'
import SuaLista from './SuaLista.vue'
import MostarReceitas from './MostarReceitas.vue'

type Pagina = 'SelecionarIngrediente' | 'MostarReceitas'
const conteudo = ref<Pagina>('SelecionarIngrediente')

const ingredientes = ref<string[]>([])

function adicionarIngrediente(ingrediente: string) {
  ingredientes.value.push(ingrediente)
}
function removerIngrediente(ingrediente: string) {
  ingredientes.value = ingredientes.value.filter((i) => i !== ingrediente)
}
function navegar(pagina: Pagina) {
  conteudo.value = pagina
}
</script>

<template>
  <div>
    <main class="conteudo-principal">
      <SuaLista :ingredientes="ingredientes" />
      <KeepAlive include="SelecionarIngredientes">
        <SelecionarIngredientes
          v-if="conteudo === 'SelecionarIngrediente'"
          @adicionar-ingrediente="adicionarIngrediente($event)"
          @remover-ingrediente="removerIngrediente"
          @buscar-receitas="navegar('MostarReceitas')"
        />
        <MostarReceitas
          :ingredientes="ingredientes"
          v-else-if="conteudo === 'MostarReceitas'"
          @editar-receitas="navegar('SelecionarIngrediente')"
        />
      </KeepAlive>
    </main>
  </div>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
