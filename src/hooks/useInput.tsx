import React, { useState } from "react";

function useInput(initialText: string) {
  const [text, setText] = useState(initialText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const resetText = (): void => {
    setText("");
  };

  return { text, handleChange, resetText, setText };
}

export default useInput;
