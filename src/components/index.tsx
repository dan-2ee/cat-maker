import React, {useEffect, useState} from "react";
import fetchCat from "./MakeCat/fetchCat";
import jsonLocalStorage from "./MakeCat/JsonLocalStorage";
import * as S from "./style";
import Title from "./MakeCat/Title";
import Form from "./MakeCat/Form";
import MainCard from "./MakeCat/MainCard";
import Favorites from "./MakeCat/Favorites";

function MakeCat() {
    const [counter, setCounter] = useState<number>(jsonLocalStorage.getItem("counter") ? jsonLocalStorage.getItem("counter") : 1)
    const [mainCat, setMainCat] = useState<string>("");
    const [favorites, setFavorites] = useState<string[]>(jsonLocalStorage.getItem("favorites") ? jsonLocalStorage.getItem("favorites") : []);

    async function setInitialCat() {
        const newCat:string = await fetchCat('First Cat');
        setMainCat(newCat);
    }

    useEffect(() => {setInitialCat()}, [])

    async function updateMainCat(text : string) {
        const newCat:string = await fetchCat(text);
        setMainCat(newCat);
        setCounter((prev: number) => {
            const nextCounter:number = prev + 1;
            jsonLocalStorage.setItem('counter', nextCounter)
            return nextCounter;
        })
    }

    function handleHeartClick() {
        const nextFavorites:string[] = [...favorites, mainCat]
        setFavorites(nextFavorites);
        jsonLocalStorage.setItem('favorites', nextFavorites);
    }

    return (
        <S.ContentContainer >
            <Title counter={counter}/>
            <Form updateMainCat={updateMainCat}/>
            <MainCard img={mainCat} onHeartClick={handleHeartClick} />
            <Favorites favorites={favorites} />
        </S.ContentContainer>
    )
}

export default MakeCat