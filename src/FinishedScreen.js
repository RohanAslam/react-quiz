import { useEffect } from "react";

function FinishedScreen({ points, maxPoints, dispatch, highscore }) {
  const percentage = (points / maxPoints) * 100;

  useEffect(
    function () {
      if (points > highscore)
        dispatch({ type: "newHighscore", payload: points });
    },
    [highscore, points, dispatch]
  );

  return (
    <div>
      <h4>
        You Scored <strong>{points}</strong> number of points out of {maxPoints}
      </h4>
      <p className="result">{Math.ceil(percentage)}% of answers were correct</p>
      <p className="highscore">
        highscore: {points > highscore ? points : highscore} points
      </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        restart
      </button>
    </div>
  );
}

export default FinishedScreen;
