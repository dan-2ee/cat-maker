import React, {useEffect, useState} from "react";
import fetchCat from "./MakeCat/fetchCat";
import * as S from "./style";
import Title from "./MakeCat/Title";
import Form from "./MakeCat/Form";
import MainCard from "./MakeCat/MainCard";
import Favorites from "./MakeCat/Favorites";

function MakeCat() {

    // const [counter, setCounter] = useState(() => {
    //     JsonLocalStorage.getItem("counter");
    // todo: count 값이 없을 때 error
    // })
    const [counter, setCounter] = useState(1);

    const [mainCat, setMainCat] = useState<string>("");

    // const [favorites, setFavorites] = React.useState(jsonLocalStorage.getItem("favorites" || []));
    // todo: favorites 값이 없을 때 error
    const [favorites, setFavorites] = useState<string[]>([]);
    const alreadyFavorite:boolean = favorites.includes(mainCat);

    async function setInitialCat() {
        const newCat = await fetchCat('First Cat');
        setMainCat(newCat);
    }

    useEffect(() => {setInitialCat()}, [])

    async function updateMainCat(value : string) {
        const newCat = await fetchCat(value);
        setMainCat(newCat);
        setCounter((prev) => {
            const nextCounter = prev + 1;
            // jsonLocalStorage.setItem('counter', nextCounter)
            return nextCounter;
        })
    }

    function handleHeartClick() {
        const nextFavorites = [...favorites, mainCat]
        setFavorites(nextFavorites);
        // jsonLocalStorage.setItem('favorites', nextFavorites);
    }

    return (
        <S.ContentContainer>
            <Title counter={counter}/>
            <Form updateMainCat={updateMainCat}/>
            <MainCard img={mainCat} onHeartClick={handleHeartClick} alreadyFavorite={alreadyFavorite}/>
            <Favorites favorites={favorites} />
        </S.ContentContainer>
    )
}


export default MakeCat