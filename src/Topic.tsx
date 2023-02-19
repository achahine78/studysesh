import { Card, Col, Collapse, Row } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";

const questionsList = [
  {
    id: 0,
    question: "What is the output?",
    answer: "number",
    correctnessScore: 0,
  },
  {
    id: 1,
    question: "What is the output?",
    answer: "array",
    correctnessScore: 0,
  },
  {
    id: 2,
    question: "What is the output?",
    answer: "ReferenceError",
    correctnessScore: 0,
  },
];

type Question = {
  id: number;
  question: string;
  answer: string;
  correctnessScore: number;
};

type QuestionCardProps = {
  question: Question;
  goToNextQuestion: () => void;
};

const QuestionCard = ({ question, goToNextQuestion }: QuestionCardProps) => {
  return (
    <Card title={question.question} bordered={false} style={{ width: 300 }}>
      <Collapse bordered={false}>
        <Collapse.Panel header={<b>Answer</b>} key="1">
          {question.answer}
        </Collapse.Panel>
      </Collapse>
      <Row style={{ marginTop: '1em' }}>
        <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <CheckCircleOutlined onClick={goToNextQuestion} style={{ fontSize: '2em', color: '#52c41a' }}/>
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <CloseCircleOutlined onClick={goToNextQuestion} style={{ fontSize: '2em', color: '#ff4d4f' }} />
        </Col>
      </Row>
    </Card>
  );
};

export const Topic = () => {
  const { id } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const sortedQuestions = questionsList.sort(
    (a, b) => a.correctnessScore - b.correctnessScore
  );
  const currentQuestion = sortedQuestions[currentQuestionIndex];
  return (
    <div className="App">
      <QuestionCard
        question={currentQuestion}
        goToNextQuestion={() => {
          if (currentQuestionIndex === sortedQuestions.length - 1) return;
          setCurrentQuestionIndex(
            (currentQuestionIndex) => currentQuestionIndex + 1
          );
        }}
      />
    </div>
  );
};
