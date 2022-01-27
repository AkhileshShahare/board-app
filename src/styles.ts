import styled from "styled-components";

// Using a flexbox layout.
export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #f1f2f5;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 1; // component takes up all the horizontal space
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

interface AddCardButtonProps {
  dark?: boolean;
}

export const DeleteCardButton = styled.button<AddCardButtonProps>`
  color: #fff;
  background-color: #dc3545;
  border-radius: 3px;
  border-color: #dc3545;
  border: none;
  cursor: pointer;
  padding: 6px 12px;
  text-align: center;
  transition: background 85ms ease-in;
  &:hover{
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  &:hover ${DeleteCardButton} {
    background-color: #dd3444;
  }
`;

export const AddCardButton = styled.button<AddCardButtonProps>`
  background-color: #d4d5db;
  border-radius: 3px;
  border: none;
  color: "#000";
  cursor: pointer;
  padding: 10px 12px;
  text-align: center;
  transition: background 85ms ease-in;
  width: 100%;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: #d4d5db;
  }
`;

export const NewCardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;

export const ButtonsContainer = styled.div``;

export const NewCardButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: right;
  margin-bottom: 12px;
`;

export const NewCardInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;
