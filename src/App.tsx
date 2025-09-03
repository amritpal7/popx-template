import "./App.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import AccountPage from "./pages/account";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <AccountPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
