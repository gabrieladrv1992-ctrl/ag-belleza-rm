import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/components/layout/RootLayout'
import HomePage from '@/pages/HomePage'
import QuienesSomosPage from '@/pages/QuienesSomosPage'
import DirectorioPage from '@/pages/DirectorioPage'
import GaleriaPage from '@/pages/GaleriaPage'
import TalleresPage from '@/pages/TalleresPage'
import BlogPage from '@/pages/BlogPage'
import BlogPostPage from '@/pages/BlogPostPage'
import ContactoPage from '@/pages/ContactoPage'
import NotFoundPage from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'quienes-somos', element: <QuienesSomosPage /> },
      { path: 'directorio', element: <DirectorioPage /> },
      { path: 'galeria', element: <GaleriaPage /> },
      { path: 'talleres', element: <TalleresPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'contacto', element: <ContactoPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
], { basename: import.meta.env.BASE_URL })
