import type ICategoria from '@/Interfaces/ICategoria'
import type IReceita from '@/Interfaces/IReceita'

export async function obterCategorias() {
  const resposta = await fetch(
    'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json',
  )
  const categorias: ICategoria[] = await resposta.json()
  return categorias
}

export async function obterReceitas(): Promise<IReceita[]> {
  return obterDadosURL<IReceita[]>(
    'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/receitas.json',
  )
}

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url)
  return resposta.json() as T
}
