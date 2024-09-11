import { useState } from "react";

const SingleQuestion = ({ title, id, info }) => {
    const [showInfo, setShowInfo] = useState(false)
    const handleToggle = () => {
        setShowInfo(!showInfo)
        console.log(showInfo)
    }
  return (
    <article className="question">
      <header >
        <h4>{title}</h4>
        <button className="btn" onClick={() => handleToggle(id)}>
          toggle
        </button>
      </header>
      <p>{showInfo ? info : ""}</p>
    </article>
  );
};
export default SingleQuestion;
