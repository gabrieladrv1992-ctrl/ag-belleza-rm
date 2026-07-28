import { z } from 'zod'

export const contactSchema = z.object({
  nombre: z.string().min(2, 'Ingresa tu nombre completo.').max(80),
  email: z.string().email('Ingresa un correo electrónico válido.'),
  telefono: z
    .string()
    .min(8, 'Ingresa un teléfono válido.')
    .regex(/^[0-9+\s-]+$/, 'Solo se permiten números, espacios, + y -.'),
  asunto: z.string().min(3, 'Cuéntanos brevemente el motivo de tu mensaje.').max(120),
  mensaje: z.string().min(10, 'Tu mensaje debe tener al menos 10 caracteres.').max(1000),
})

export const loginSchema = z.object({
  email: z.string().email('Ingresa un correo electrónico válido.'),
  password: z.string().min(1, 'Ingresa tu contraseña.'),
})
