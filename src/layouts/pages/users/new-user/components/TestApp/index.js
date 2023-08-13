import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Jupiter",
  },
  // Add more questions here
];

const TestApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleOptionSelect = (selectedOption) => {
    setUserAnswers([...userAnswers, selectedOption]);
    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const renderQuestion = () => {
    if (currentQuestionIndex >= questions.length) {
      return (
        <div>
          <h2>Test Completed!</h2>
          <p>Your Score: {calculateScore()}</p>
        </div>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div>
        <h2>{currentQuestion.question}</h2>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <button onClick={() => handleOptionSelect(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Online Practice Test</h1>
      {renderQuestion()}
    </div>
  );
};

export default TestApp;
