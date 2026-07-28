import { CheckCircle2 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

function formatFecha(fecha) {
  return new Date(`${fecha}T00:00:00`).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatMonto(monto) {
  return monto.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
}

export default function EstadoCuentaTable({ cuotas }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-nude-200 bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-nude-50/60">
            <TableHead>Fecha</TableHead>
            <TableHead>Concepto</TableHead>
            <TableHead>Monto</TableHead>
            <TableHead className="text-right">Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cuotas.map((cuota) => (
            <TableRow key={cuota.id}>
              <TableCell className="text-charcoal-500">{formatFecha(cuota.fecha)}</TableCell>
              <TableCell className="font-medium text-charcoal-700">{cuota.concepto}</TableCell>
              <TableCell className="text-charcoal-500">{formatMonto(cuota.monto)}</TableCell>
              <TableCell className="text-right">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  <CheckCircle2 className="size-3.5" />
                  {cuota.estado}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
