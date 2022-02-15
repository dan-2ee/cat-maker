import React, {useState} from "react";
import * as S from "./FormStyle";

const Form = ({updateMainCat}: { updateMainCat: any }) => {
    const [text, setText] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        setErrorMessage("");
        if (text === "") {
            setErrorMessage("빈 값으로 만들 수 없습니다");
            return;
        }
        updateMainCat(text);
    }

    const handleInputChange = (e: any) => {
        const name = e.target.value;
        setErrorMessage("");
        if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(name)) {
            setErrorMessage("한글은 입력할 수 없습니다")
        }
        setText(name.toUpperCase());
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <S.InputBox>
                <input type="text" placeholder={"원하는 영어 문구를 입력해주세요"} value={text} onChange={handleInputChange} style={{width: "250px", height: "40px", border: "none", fontSize: "15px"}}/>
                <S.MakeBtn >생성</S.MakeBtn>
            </S.InputBox>
            <p style={{color: 'red'}}>{errorMessage}</p>
        </form>
    )
}

export default Form