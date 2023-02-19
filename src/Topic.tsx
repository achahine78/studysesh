import { Card, Collapse, Typography } from "antd";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

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

type Question = {
  id: number;
  question: string;
  answer: string;
  isCorrectlyAnswered: boolean;
};

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card title={question.question} bordered={false} style={{ width: 300 }}>
      <Collapse bordered={false}>
        <Collapse.Panel header={<b>Answer</b>} key="1">
          {question.answer}
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};

export const Topic = () => {
  const { id } = useParams();
  return (
    <div className="App">
      {questionsList.map((question) => (
        <QuestionCard question={question} />
      ))}
    </div>
  );
};
