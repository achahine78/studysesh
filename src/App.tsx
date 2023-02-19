import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./HomePage";
import "./App.css";
import { Topic } from "./Topic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/topic/:id",
    element: <Topic />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
