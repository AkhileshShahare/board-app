import React, { MouseEventHandler } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { CardContainer, DeleteCardButton } from "../styles";
import { EditCardForm } from "./EditCardForm";

interface CardProps {
  text: string;
  index: string;
  listId: number;
}

export const Card = ({ text, index, listId }: CardProps) => {
  const [showForm, setShowForm] = useState(false);

  const dispatch: Dispatch<any> = useDispatch();

  const handleRemove = (e: any) => {
    e.stopPropagation();
    dispatch({
      type: "REMOVE_CARD",
      payload: { taskId: index, listId }
    });
  };
  if (showForm) {
    return (
      <EditCardForm
        textFromProps={text}
        onEdit={(text) => {
          dispatch({
            type: "CHANGE_CARD_TEXT",
            payload: { text, taskId: index, listId }
          });
          setShowForm(false);
        }}
        onCancel={() => setShowForm(false)}
      />
    );
  }
  return (
    <>
      <CardContainer onClick={() => setShowForm(true)}>
        {text}
        <DeleteCardButton onClick={handleRemove}>Remove</DeleteCardButton>
      </CardContainer>
    </>
  );
};
