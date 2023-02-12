import React, { useState } from "react";
import Data from "../data.type";
import { Button, Form } from "react-bootstrap";
import "./SearchForm.css";

interface SearchFormProps {
  generateImage: (prompt: string, noOfImage: string) => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setImageURLs: React.Dispatch<React.SetStateAction<Data[]>>;
}

function SearchForm({ generateImage, setLoading, setImageURLs }: SearchFormProps) {
  const [text, setText] = useState<string>("");
  const [noOfImage, setNoOfImage] = useState<string>("1");

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setImageURLs([]);

    await generateImage(text, noOfImage);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Form onSubmit={onFormSubmit} style={{ boxShadow: "0px 1px 1px #cfcfcf", paddingBottom: "25px" }}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here"
            autoFocus
            className="size input"
          />

          <Form.Label className="label">No of images:</Form.Label>
          <Form.Control
            type="number"
            value={noOfImage}
            onChange={(e) => setNoOfImage(e.target.value)}
            placeholder="No of images"
            className="size input"
            max="10"
            min="1"
          />

          <Button variant="primary" type="submit" className="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchForm;
