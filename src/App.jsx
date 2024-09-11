import { useState } from "react";
import data from "./data.js";
import SingleQuestion from "./SingleQuestion.jsx";

function App() {
  const [questions, setQuestions] = useState(data);
  

  return (
    <div className="container">
      <h1>Questions</h1>
      {questions.map(({ title, id, info }) => {
        return (
          <div>
            <div key={id}>
              <SingleQuestion title={title} id={id} info={info} onClick={handleToggle}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
