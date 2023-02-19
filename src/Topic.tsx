import { Card, Typography } from "antd";
import { useParams } from "react-router-dom";

const questionsList = [
  {
    id: 0,
    question: "What is the output?",
    answer: "number",
    isCorrectlyAnswered: false,
  },
  {
    id: 1,
    question: "What is the output?",
    answer: "array",
    isCorrectlyAnswered: false,
  },
  {
    id: 2,
    question: "What is the output?",
    answer: "ReferenceError",
    isCorrectlyAnswered: false,
  },
];

export const Topic = () => {
  const { id } = useParams();
  return (
    <div className="App">
      {questionsList.map((question) => (
        <Card title={question.question} bordered={false} style={{ width: 300 }}>
          <p>{question.answer}</p>
        </Card>
      ))}
    </div>
  );
};
