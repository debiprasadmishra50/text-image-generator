import React, { useState } from "react";
import Data from "../data.type";

interface InputProps {
  generateImage: (prompt: string) => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setImageURLs: React.Dispatch<React.SetStateAction<Data[]>>;
}

function Input({ generateImage, setLoading, setImageURLs }: InputProps) {
  const [text, setText] = useState<string>("");

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setImageURLs([]);

    await generateImage(text);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="text"></label>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          autoFocus
          placeholder="Enter text here"
          style={{
            width: "50%",
            height: "2rem",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#efefef",
            fontSize: "1rem",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "7px 7px #cdcdcd",
          }}
        />
      </form>
    </div>
  );
}

export default Input;
