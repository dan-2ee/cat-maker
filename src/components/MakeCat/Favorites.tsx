import * as S from "./FavoritesStyle";
import React from "react";

const Favorites = ({favorites}:{favorites: string[]}) => {
    // if (favorites.length === 0) {
    //     return (
    //         <S.EmptyList description={false}/>
    //     )
    // }
    return (
        <S.FavoriteCatList>
            {favorites.map((cat:string) =>
                <S.FavoriteCat src={cat}/>
            )}
        </S.FavoriteCatList>
    )
}

export default Favorites