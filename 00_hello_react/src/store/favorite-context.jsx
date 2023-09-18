import { createContext, useState } from "react";

// 参数default，如果设定好了value，不设置也无影响，默认值永远不变
const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
})


export function FavoriteContextProvider ({children}) {
  const [ userFavorites, setUserFavorites ] = useState([])

  function addFavoritesHandler(favoriteMeetup) {
    // userFavorites.concat(favoriteMeetup) 不能保证是最新的，因为react并没有及时处理它，是在后台添加上了，这样以来即使它通常能成功，但也存在不确定
    setUserFavorites((prev) => {
      return prev.concat(favoriteMeetup)
    })
  }
  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prev) => {
      return prev.filter(v => v.id !== meetupId)
    })
  } 
  function itemIsFavoritesHandler(meetupId) {
    return userFavorites.some(v => v.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoritesHandler
  }

  return <FavoriteContext.Provider value={context}>
    {children}
  </FavoriteContext.Provider>
}

export default FavoriteContext