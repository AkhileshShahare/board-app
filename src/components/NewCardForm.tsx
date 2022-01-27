import React, { useEffect, useRef, useState } from "react";
import { NewCardFormContainer, NewCardButton, NewCardInput, ButtonsContainer } from "../styles";

interface NewCardFormProps {
  onAdd: (text: string) => void;
  onCancel: () => void;
}

export const NewCardForm = ({ onAdd, onCancel }: NewCardFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <NewCardFormContainer>
      <NewCardInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ButtonsContainer>
        <NewCardButton onClick={() => onAdd(text)}>Create</NewCardButton>
        <NewCardButton onClick={onCancel}>Cancel</NewCardButton>
      </ButtonsContainer>
    </NewCardFormContainer>
  );
};
