import styled from '@emotion/styled';

export const Input = styled.input`
  height: 30px;
  width: 130px;
  outline: 0px;
  border: 1px solid;
  border-radius: 5px;
  margin-left: 10px;
  padding-left: 10px;
  margin-right: 10px;
`;

export const Btn = styled.button`
  transition: transform 0.3ms;
  cursor: pointer;
  width: 100px;
  height: 30px;
  display: inline-block;
  color: #000;
  background-color: rgb(153, 228, 213);
  font-size: 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  &:hover {
    transform: scale(1.03);
  }
`;
