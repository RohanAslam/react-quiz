function NextButton({ dispatch, answer, questionIndex, numQuestions }) {
  if (answer === null) return;

  function handleNext() {
    questionIndex < numQuestions - 1
      ? dispatch({ type: "nextQuestion" })
      : dispatch({ type: "quizFinished" });
  }

  return (
    <button className="btn btn-ui" onClick={handleNext}>
      {questionIndex < numQuestions - 1 ? "Next" : "Finish"}
    </button>
  );
}

export default NextButton;
