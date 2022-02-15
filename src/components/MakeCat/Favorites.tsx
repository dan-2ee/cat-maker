import * as S from "./FavoritesStyle";
import React from "react";

const Favorites = ({favorites}:{favorites: any}) => {
    // if (favorites.length === 0) {
    //     return (
    //         <S.EmptyList description={false}/>
    //     )
    // }
    return (
        <S.FavoriteCatList>
            {favorites.map((cat:any) =>
                <S.FavoriteCat src={cat}/>
            )}
        </S.FavoriteCatList>
    )
}

export default Favorites