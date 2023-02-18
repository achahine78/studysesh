import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./HomePage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/topic/:id",
    element: "insert topic component here",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
