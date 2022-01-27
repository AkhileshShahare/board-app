import React from "react";
import { AddNewCard } from "./AddNewCard";
import { ColumnContainer, ColumnTitle } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { Dispatch } from "redux";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({ text, index, id }: ColumnProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const lists: List[] = useSelector((state: CardsState) => state.lists);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <AddNewCard
        toggleButtonText="+"
        onAdd={(text) => dispatch({ type: "ADD_CARD", payload: { text, taskId: id } })}
      />
      {lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.taskId} index={task.taskId} listId={index}/>
      ))}
    </ColumnContainer>
  );
};
