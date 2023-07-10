import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster/>
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
