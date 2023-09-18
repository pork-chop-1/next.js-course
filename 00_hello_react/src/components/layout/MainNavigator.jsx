import { Link } from 'react-router-dom'
import { useContext } from 'react'

import './MainNavigator.scoped.scss'
import FavoriteContext from '@/store/favorite-context'

const MainNavigator = () => {
  const favoriteCtx = useContext(FavoriteContext)
  return <header>
    <div>React Meetup</div>
    <nav>
      <ul>
        <li>
          <Link to={'/'}>All Meetup</Link>
        </li>
        <li>
          <Link to={'/new'}>New Meetup</Link>
        </li>
        <li>
          <Link to={'/favor'}>
            Favorites
            <span className='badge'>{favoriteCtx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainNavigator