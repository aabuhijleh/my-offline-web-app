import React, { useState } from "react";
import cl from "classnames";
import styles from "./QuestionBox.module.css";

interface QuestionBoxProps {
  question: string;
  choices: string[];
  correctChoiceIndex: number;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  question,
  choices,
  correctChoiceIndex,
}) => {
  const [selectedChoice, setSelectedChoice] = useState(-1);
  const [correctChoice, setCorrectChoice] = useState(-1);
  const [wrongChoice, setWrongChoice] = useState(-1);

  const checkAnswer = () => {
    if (selectedChoice === correctChoiceIndex) {
      setCorrectChoice(selectedChoice);
    } else {
      setWrongChoice(selectedChoice);
    }
  };

  return (
    <>
      <h3>{question}</h3>
      <ol>
        {choices.map((choice, index) => (
          <li
            key={index}
            className={cl(
              { [styles.correct]: index === correctChoice },
              { [styles.wrong]: index === wrongChoice }
            )}
          >
            <input
              type="checkbox"
              checked={selectedChoice === index}
              onChange={() => setSelectedChoice(index)}
            />
            {choice}
          </li>
        ))}
      </ol>
      <button onClick={() => checkAnswer()}>التحقق من الإجابة</button>
    </>
  );
};
