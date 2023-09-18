import MeetupList from "@/components/meetups/MeetupList"

import { useContext } from "react"
import FavoriteContext from "@/store/favorite-context"

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoriteContext)
  const favoriteList = favoriteCtx.favorites

  let content
  if(!favoriteList || favoriteList.length === 0) {
    content = <p>Got no favorite yet. Add Some?</p>
  } else {
    content = <MeetupList meetups={favoriteList}></MeetupList>
  }

  return <div>
    <h1>favorites page</h1>
    <main>
      {content}
    </main>
  </div>
}

export default FavoritesPage