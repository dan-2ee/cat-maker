import React, {useState} from "react";
import * as S from "./FormStyle";

const Form = ({updateMainCat}: { updateMainCat: any }) => {
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
                <S.InputBox>
                    <input type="text" placeholder={"영어 대사를 입력해주세요"} value={name} onChange={handleInputChange} style={{width: "230px", height: "40px", border: "none"}}/>
                    <button type="submit" style={{width: "70px", height: "40px", border: "none"}}>생성</button>
                </S.InputBox>
                <p style={{color: 'red'}}>{errorMessage}</p>
            </form>
        </>
    )
}

export default Form