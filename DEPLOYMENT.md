# Versión pública y despliegue

## Estado

Esta versión es una vista previa con contenidos pendientes de aprobación. El aviso visible y la etiqueta `noindex` deben mantenerse hasta validar las noticias, los socios, las actividades y las imágenes con la asociación. No basta con desplegarla para considerarla lista para lanzamiento institucional.

El área de socios no está registrada en el router ni incluida en la aplicación pública. Sus archivos se conservan como referencia para el desarrollo futuro, sin autenticación real ni datos privados.

## Contacto

Correo: `web.gremiobellezarm@gmail.com`.

El formulario valida los campos y prepara un enlace `mailto:`. Requiere una aplicación de correo configurada y que el visitante envíe el borrador. No envía automáticamente, no registra datos en un servidor y no confirma recepción. El envío automático queda pendiente de elegir y configurar un proveedor de correo y probar la recepción. No guardar contraseñas de Gmail en el código ni en variables `VITE_*`.

## Vercel

- Repositorio: `gabrieladrv1992-ctrl/ag-belleza-rm`.
- Framework: Vite.
- Instalación: `npm ci`.
- Compilación: `npm run build`.
- Salida: `dist`.
- Carpeta raíz: `./`.
- La variable de sistema `VERCEL=1` selecciona la raíz `/` en Vite.
- `vercel.json` reescribe las rutas de la SPA a `index.html`.

No se necesitan credenciales ni variables de aplicación para esta vista previa.

## GitHub Pages

Fuera de Vercel se conserva la base `/ag-belleza-rm/`. El workflow existente publica automáticamente los pushes a `master`. Subir cambios a esa rama también actualiza GitHub Pages.

## Verificación antes de lanzamiento

- Validar información institucional y reemplazar los ejemplos por datos aprobados.
- Revisar escritorio, móvil, menú, filtros, galería y rutas abiertas directamente.
- Confirmar que `/socios/login` y `/socios/dashboard` no muestran el sistema de demostración.
- Probar preparación del correo y envío manual al nuevo Gmail.
- Si se implementa envío automático, comprobar recepción real antes de mostrar confirmación de envío.
- Solo tras la aprobación del contenido, retirar el aviso de vista previa y `noindex`.
