import { useContext } from 'react'

import Card from "@/components/ui/Card"
import './MeetupItem.scoped.scss'
import FavoritesContext from '@/store/favorite-context'

function MeetupItem({ imageUrl, title, description, address, id }) {
  const favoritesCtx = useContext(FavoritesContext)

  const isItemFavorite = favoritesCtx.itemIsFavorite(id)
  
  function toggleFavoriteStatusHandler() {
    if (isItemFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        imageUrl,
        title,
        description,
        address,
        id
      })
    }
  }

  return <li>
    <Card>
      <div className='wrapper'>
        <img className='img' src={imageUrl} alt={title}></img>
        <div className="item-wrapper">
          <div>{title}</div>
          <div>{description}</div>
          <div className="address">{address}</div>
          <button onClick={toggleFavoriteStatusHandler}>
            {isItemFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </div>
    </Card>
  </li>
}

export default MeetupItem