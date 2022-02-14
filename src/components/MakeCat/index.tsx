import React, {useEffect, useState} from "react";
import JsonLocalStorage from "./JsonLocalStorage";
import fetchCat from "./fetchCat";

const Title = ({counter}: {counter: any}) => {
    return <h1>{counter}번째 고양이</h1>
}

const Form = ({updateMainCat}:{updateMainCat:any}) => {
    const [name, setName] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        setErrorMessage("");
        if (name === "") {
            setErrorMessage("빈 값으로 만들 수 없습니다");
            return;
        }
        updateMainCat(name);
    }

    const handleInputChange = (e: any) => {
        const name = e.target.value;
        setErrorMessage("");
        if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(name)) {
            setErrorMessage("한글은 입력할 수 없습니다")
        }
        setName(name.toUpperCase());
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder={"영어 대사를 입력해주세요"} value={name} onChange={handleInputChange}/>
                <button type="submit">생성</button>
                <p style={{color: 'red'}}>{errorMessage}</p>
            </form>
        </>
    )
}

const MainCard = ({img, onHeartClick, alreadyFavorite}:{img: any, onHeartClick:any, alreadyFavorite:any}) => {
    return (
        <div>
            <img src={img} width={"400"}/>
            <button onClick={onHeartClick}>{alreadyFavorite ? "💖" : "🤍"}</button>
        </div>
    )
}

const Favorites = ({favorites}:{favorites: any}) => {
    if (favorites.length === 0) {
        return <div> 사진 위 하트를 눌러 고양이 사진을 저장하세요! </div>
    }
    return (
        <ul>
            {favorites.map((cat:any) =>
                <li>
                    <img src={cat} style={{width: "150px"}}/>
                </li>
            )}
        </ul>
    )
}

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
        <div>
            <Title counter={counter}/>
            <Form updateMainCat={updateMainCat}/>
            <MainCard img={mainCat} onHeartClick={handleHeartClick} alreadyFavorite={alreadyFavorite}/>
            <Favorites favorites={favorites} />
        </div>
    )
}

export default MakeCat