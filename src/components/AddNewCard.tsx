import React, { useState } from "react";
import { AddCardButton } from "../styles";
import { NewCardForm } from "./NewCardForm";

interface AddNewCardProps {
  onAdd: (text: string) => void;
  toggleButtonText: string;
}

export const AddNewCard = (props: AddNewCardProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText } = props;
  if (showForm) {
    // We show card creation form here
    return (
      <NewCardForm
        onCancel={() => setShowForm(false)}
        onAdd={(text: string) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddCardButton onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddCardButton>
  );
};
