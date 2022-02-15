import styled from "styled-components";

export const InputBox = styled.div`{
  display: flex;
  justify-content: center;
  margin-top: 2%;
}`;

export const MakeBtn = styled.button`{
  width: 75px;
  height: 42px;
  border: none;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #ffb3ed;
    color: white;
  }
}`;
