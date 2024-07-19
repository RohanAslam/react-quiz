function Progress({ questionIndex, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={questionIndex + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{questionIndex + 1}</strong>/ {numQuestions}
      </p>

      <p>
        <strong>{points}</strong>/ {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
