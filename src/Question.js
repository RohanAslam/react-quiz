import Options from "./Options";

function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options questions={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
