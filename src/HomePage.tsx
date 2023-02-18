import { Divider, List } from "antd";
import { Link } from "react-router-dom";
const topicList = [
  {
    id: 0,
    title: "Topic 1",
  },
  {
    id: 1,
    title: "Topic 2",
  },
  {
    id: 2,
    title: "Topic 3",
  },
  {
    id: 3,
    title: "Topic 4",
  },
];
export const HomePage = () => (
  <div className="App">
    <Divider orientation="left">Topic List</Divider>
    <List
      bordered
      dataSource={topicList}
      renderItem={(topic) => (
        <Link to={`/topic/${topic.id}`}>
          <List.Item>
            {topic.title}
          </List.Item>
        </Link>
      )}
    />
  </div>
);
