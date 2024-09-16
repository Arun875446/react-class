// input, textArea, select, radio

import { useState } from "react";
const OnChang = () => {
  const [name, setName] = useState("Guest");

  const [number, setNumber] = useState(1);

  const [comment, setComment] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const numberChange = (e) => {
    setNumber(e.target.value);
  };
  const commentChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <>
      <input value={name} onChange={nameChange} type="text" />
      <p>Name: {name} </p>

      <input value={number} onChange={numberChange} type="number" />
      <p>Name: {number} </p>

      <textarea
        value={comment}
        onChange={commentChange}
        placeholder="Enter your comment"
      />

      <p>Comment: {comment}</p>
    </>
  );
};

export default OnChang;
