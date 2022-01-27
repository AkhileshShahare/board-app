import React, { useEffect, useRef, useState } from "react";
import { NewCardFormContainer, NewCardButton, NewCardInput, ButtonsContainer } from "../styles";

interface EditCardFormProps {
  textFromProps: string;
  onEdit: (text: string) => void;
  onCancel: () => void;
}

export const EditCardForm = ({ onEdit, textFromProps, onCancel }: EditCardFormProps) => {
  const [text, setText] = useState(textFromProps);
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
        <NewCardButton onClick={() => onEdit(text)}>Save</NewCardButton>
        <NewCardButton onClick={onCancel}>Cancel</NewCardButton>
      </ButtonsContainer>
    </NewCardFormContainer>
  );
};
