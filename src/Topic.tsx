import { Card, Typography } from "antd";
import { useParams } from "react-router-dom";

const questionsList = [
  {
    id: 0,
    title: "What is the output?",
    body: `
      function sayHi() {\n
        \treturn (() => 0)();\n
      }\n
      \n
      console.log(typeof sayHi());\n
    `,
    answer: "number",
    isCorrectlyAnswered: false,
  },
  {
    id: 1,
    title: "What is the output?",
    body: `
      function getAge(...args) {
        console.log(typeof args);
      }
      
      getAge(21);
    `,
    answer: "array",
    isCorrectlyAnswered: false,
  },
  {
    id: 2,
    title: "What is the output?",
    body: `
      function getAge() {
        'use strict';
        age = 21;
        console.log(age);
      }
      
      getAge();
    `,
    answer: "ReferenceError",
    isCorrectlyAnswered: false,
  },
];

export const Topic = () => {
  const { id } = useParams();
  return (
    <div className="App">
      {questionsList.map((question) => (
        <Card title={question.title} bordered={false} style={{ width: 300 }}>
          <Typography.Paragraph code>{question.body}</Typography.Paragraph>
          <p>{question.answer}</p>
        </Card>
      ))}
    </div>
  );
};
