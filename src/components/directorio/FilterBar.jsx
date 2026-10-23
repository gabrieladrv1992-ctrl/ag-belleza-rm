import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import SearchBar from '@/components/common/SearchBar'
import { categorias, comunas } from '@/data/socios'

export default function FilterBar({
  query,
  onQueryChange,
  categoria,
  onCategoriaChange,
  comuna,
  onComunaChange,
  todas,
}) {
  return (
    <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
      <SearchBar
        value={query}
        onChange={onQueryChange}
        placeholder="Buscar por nombre o especialidad..."
      />

      <Select value={categoria} onValueChange={onCategoriaChange}>
        <SelectTrigger aria-label="Filtrar por categoría" className="h-11 w-full bg-white">
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={todas}>Todas las categorías</SelectItem>
          {categorias.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={comuna} onValueChange={onComunaChange}>
        <SelectTrigger aria-label="Filtrar por comuna" className="h-11 w-full bg-white">
          <SelectValue placeholder="Comuna" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={todas}>Todas las comunas</SelectItem>
          {comunas.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
