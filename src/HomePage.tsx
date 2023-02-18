import { Divider, List } from "antd"; 
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
      renderItem={(item) => <List.Item>{item.title}</List.Item>}
    />
  </div>
);
