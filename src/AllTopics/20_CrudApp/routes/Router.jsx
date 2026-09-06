import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import CreateUserPage from "../pages/CreateUserPage";
import AllUsersPage from "../pages/AllUsersPage";
import EditUserPage from "../pages/EditUserPage";

export const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-user",
        element: (
          <PrivateRoute>
            <CreateUserPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-users",
        element: (
          <PrivateRoute>
            <AllUsersPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-user/:id",
        element: (
          <PrivateRoute>
            <EditUserPage />
          </PrivateRoute>
        )
      }
    ],
  },
]);
