import { useMemo, useState } from 'react'

const TODAS = 'Todas'

export function useDirectorioFilter(socios) {
  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState(TODAS)
  const [comuna, setComuna] = useState(TODAS)

  const resultados = useMemo(() => {
    const q = query.trim().toLowerCase()
    return socios.filter((socio) => {
      const matchesQuery =
        q.length === 0 ||
        socio.nombre.toLowerCase().includes(q) ||
        socio.descripcion.toLowerCase().includes(q)
      const matchesCategoria = categoria === TODAS || socio.categoria === categoria
      const matchesComuna = comuna === TODAS || socio.comuna === comuna
      return matchesQuery && matchesCategoria && matchesComuna
    })
  }, [socios, query, categoria, comuna])

  return { query, setQuery, categoria, setCategoria, comuna, setComuna, resultados, TODAS }
}
