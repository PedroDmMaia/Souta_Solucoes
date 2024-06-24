import { createBrowserRouter } from 'react-router-dom'

import { MainPage } from './pages/main-page'
import { NotFound } from './pages/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
