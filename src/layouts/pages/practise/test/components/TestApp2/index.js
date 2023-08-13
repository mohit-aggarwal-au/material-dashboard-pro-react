import React, { useState } from "react";

const questionsData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars",
  },
  // Add more questions here
];

const TestApp2 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setShowAnswer(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setSelectedOption("");
    setShowAnswer(false);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const renderOptions = (options) => {
    return options.map((option, index) => (
      <label key={index} className="option">
        <input
          type="radio"
          value={option}
          checked={selectedOption === option}
          onChange={() => handleOptionSelect(option)}
          disabled={showAnswer}
        />
        {option}
      </label>
    ));
  };

  const renderCurrentQuestion = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    return (
      <div className="question-container">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.question}</p>
        <div className="options-container">{renderOptions(currentQuestion.options)}</div>
        <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Back
        </button>
        {showAnswer ? (
          <button
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questionsData.length - 1}
          >
            Next
          </button>
        ) : (
          <button onClick={handleCheckAnswer} disabled={!selectedOption}>
            Check Answer
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="app-container">
      <h1>Online Practice Test</h1>
      {currentQuestionIndex < questionsData.length ? (
        renderCurrentQuestion()
      ) : (
        <div className="result-container">
          <h2>Test Completed</h2>
          <p>
            Your Score: {score} / {questionsData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default TestApp2;
