
import { createBrowserRouter } from 'react-router-dom'

import AllMeetupPage from '@/pages/AllMeetup'
import NewMeetupPage from '@/pages/NewMeetup'
import FavoritesPage from '@/pages/Favorites'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllMeetupPage />
  },
  {
    path: '/new',
    element: <NewMeetupPage />
  },
  {
    path: '/favor',
    element: <FavoritesPage />
  },
])

export default router