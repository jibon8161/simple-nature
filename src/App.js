import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

function App() {
  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
