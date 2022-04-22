import React from "react"
import { useContext } from "react"
import { Card } from "../components/Card/Card"
import AppContext from "../context"

export function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext)
  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Мои закладки</h1>
          
        </div>
        <div className="d-flex flex-wrap">
          {
            favorites.map((item, index) => (
              <Card
                key={index}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
            ))
          }
        </div>
      </div>
  )
}