import * as S from "./TitleStyle";
import React from "react";

const Title = ({counter}: { counter: any }) => {
    return <S.Title>{counter}번째 고양이</S.Title>
}

export default Title