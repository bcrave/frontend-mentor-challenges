import { useEffect, useState } from "react";

import { scoreData, ScoreData } from "../data/scoreData";

export default function ResultsSummary() {
  const [data, setData] = useState<ScoreData[]>([
    {
      category: "",
      score: 0,
      icon: "",
    },
  ]);

  useEffect(() => {
    setData(scoreData);
  }, []);

  const renderData = () => {
    return (
      <ul className="score-data">
        {data.map(({ category, score, icon }) => (
          <li key={category}>
            <div className="left">
              <img src={icon} alt="score data icon" />
              <div>{category}</div>
            </div>

            <div className="right">
              <div>
                {score}
                <span> / 100</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="results-summary">
      <div className="content">
        <div className="score">
          <h1>Your Result</h1>

          <div className="circle">
            <h2 className="number">76</h2>

            <p>of 100</p>
          </div>

          <h2>Great</h2>

          <p className="comparison">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="summary">
          <h2>Summary</h2>

          {renderData()}

          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
