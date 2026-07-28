import { Loader2 } from 'lucide-react'

export default function Spinner({ className = '' }) {
  return (
    <div className={`flex items-center justify-center py-16 ${className}`}>
      <Loader2 className="size-8 animate-spin text-champagne-500" />
    </div>
  )
}
