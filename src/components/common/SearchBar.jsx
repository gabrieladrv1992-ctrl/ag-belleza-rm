import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function SearchBar({ value, onChange, placeholder = 'Buscar...' }) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-charcoal-300" />
      <Input
        aria-label="Buscar por nombre o especialidad"
        name="busqueda"
        type="search"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 h-11 bg-white"
      />
    </div>
  )
}
